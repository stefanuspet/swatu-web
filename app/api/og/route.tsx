import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // Get query parameters
    const title = searchParams.get("title") || "CV. Swatu Engineering";
    const description =
      searchParams.get("description") || "Structural Design Consultant";

    return new ImageResponse(
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #faf8f4 0%, #f5f0e8 100%)",
          padding: "60px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "400px",
            height: "400px",
            background: "rgba(202, 168, 130, 0.1)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "300px",
            height: "300px",
            background: "rgba(74, 94, 76, 0.08)",
            borderRadius: "50%",
            filter: "blur(40px)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            position: "relative",
            zIndex: "1",
          }}
        >
          {/* Top section */}
          <div>
            {/* Logo/Badge */}
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                letterSpacing: "0.05em",
                color: "#4a5e4c",
                textTransform: "uppercase",
                marginBottom: "40px",
              }}
            >
              Structural Design
            </div>

            {/* Title */}
            <h1
              style={{
                fontSize: "72px",
                fontWeight: "300",
                margin: "0",
                color: "#2c2c2a",
                lineHeight: "1.2",
                marginBottom: "24px",
                fontFamily: "Georgia, serif",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "32px",
                color: "#6b6b68",
                margin: "0",
                fontWeight: "300",
                letterSpacing: "0.02em",
              }}
            >
              {description}
            </p>
          </div>

          {/* Bottom section */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            {/* Left - tagline */}
            <div>
              <div
                style={{
                  fontSize: "20px",
                  color: "#4a5e4c",
                  fontWeight: "300",
                  letterSpacing: "0.04em",
                  fontStyle: "italic",
                }}
              >
                Safe. Precise. Reliable.
              </div>
            </div>

            {/* Right - accent bar */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#c9a882",
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4a5e4c",
                }}
              />
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#8a9e8c",
                }}
              />
            </div>
          </div>
        </div>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e) {
    console.error(e);
    return new Response(`Failed to generate image`, { status: 500 });
  }
}
