function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-8"
      style={{ backgroundColor: "oklch(0.2409 0.0201 307.5346)" }}
    >
      <div className="text-center space-y-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <div
              className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: "oklch(0.4607 0.1853 4.0994)",
                color: "oklch(0.856 0.0618 346.3684)",
              }}
            >
              Vibe
            </div>
            <h1
              className="text-5xl font-bold"
              style={{ color: "oklch(0.8398 0.0387 309.5391)" }}
            >
              Welcome to your canvas
            </h1>
          </div>
          <p
            className="text-xl max-w-lg mx-auto"
            style={{ color: "oklch(0.794 0.0372 307.1032)" }}
          >
            Start chatting with AI to transform this template into something
            extraordinary.
          </p>
        </div>

        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border"
          style={{
            backgroundColor: "oklch(0.2803 0.0232 307.5413)",
            borderColor: "oklch(0.3286 0.0154 343.4461)",
            color: "oklch(0.8456 0.0302 341.4597)",
          }}
        >
          <div className="relative">
            <div
              className="w-3 h-3 rounded-full animate-pulse"
              style={{ backgroundColor: "oklch(0.4607 0.1853 4.0994)" }}
            ></div>
            <div
              className="absolute inset-0 w-3 h-3 rounded-full animate-ping"
              style={{
                backgroundColor: "oklch(0.4607 0.1853 4.0994)",
                opacity: 0.3,
              }}
            ></div>
          </div>
          <span className="font-medium">Ready to vibe</span>
        </div>
      </div>
    </div>
  );
}

export default App;
