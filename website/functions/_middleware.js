async function errorHandling(context) {
  try {
    return await context.next();
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
}

/**
 * Parse HTTP Basic Authorization value.
 * @param {Request} request
 * @throws {Error}
 * @returns {{ user: string, pass: string }}
 */
function basicAuthentication(request) {
  const Authorization = request.headers.get("Authorization");

  const [scheme, encoded] = Authorization.split(" ");

  // The Authorization header must start with Basic, followed by a space.
  if (!encoded || scheme !== "Basic") {
    throw new Error("Malformed authorization header.");
  }

  // Decodes the base64 value and performs unicode normalization.
  // @see https://datatracker.ietf.org/doc/html/rfc7613#section-3.3.2 (and #section-4.2.2)
  // @see https://dev.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/normalize
  const buffer = Uint8Array.from(atob(encoded), (character) =>
    character.charCodeAt(0)
  );
  const decoded = new TextDecoder().decode(buffer).normalize();

  // The username & password are split by the first colon.
  //=> example: "username:password"
  const index = decoded.indexOf(":");

  // The user & password are split by the first colon and MUST NOT contain control characters.
  // @see https://tools.ietf.org/html/rfc5234#appendix-B.1 (=> "CTL = %x00-1F / %x7F")
  if (index === -1 || /[\0-\x1F\x7F]/.test(decoded)) {
    throw new Error("Invalid authorization value.");
  }

  return {
    user: decoded.substring(0, index),
    pass: decoded.substring(index + 1),
  };
}

async function authentication(context) {
  // The "Authorization" header is sent when authenticated.
  if (context.request.headers.has("Authorization")) {
    // extract env vars
    const BASIC_USER = context.env.BASIC_USER;
    const BASIC_PASS = context.env.BASIC_PASS;

    // Throws exception when authorization fails.
    const { user, pass } = basicAuthentication(context.request);
    if (BASIC_USER !== user || BASIC_PASS !== pass) {
      return new Response("Invalid credentials. Please login.", {
        status: 401,
        headers: {
          // Prompts the user for credentials.
          "WWW-Authenticate": 'Basic realm="my scope", charset="UTF-8"',
        },
      });
    }

    if (BASIC_USER === user && BASIC_PASS === pass) {
      return context.next();
    }
  } else {
    // Not authenticated.
    return new Response("You are not authenticated", {
      status: 401,
      headers: {
        // Prompts the user for credentials.
        "WWW-Authenticate": 'Basic realm="my scope", charset="UTF-8"',
      },
    });
  }
}

export const onRequest = [authentication];
