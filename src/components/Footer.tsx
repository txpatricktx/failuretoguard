const Footer = () => {
  return (
    <footer className="bg-card border-t-4 border-primary mt-12">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Barbed wire pixel art */}
        <div className="text-center text-muted-foreground text-sm mb-4 tracking-[0.3em] select-none">
          ─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─
        </div>
        
        <div className="text-center space-y-2">
          <p className="font-pixel text-[0.5rem] text-primary">
            ⚔️ GUARD FAILURE ACADEMY ⚔️
          </p>
          <p className="text-sm text-muted-foreground">
            A Division of the EdgeGamers Correctional Entertainment Bureau
          </p>
          <p className="text-xs text-muted-foreground">
            Guard Training Corp © 2025 — "Making Guards Worse Since Day One"
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            Based on the official{" "}
            <a
              href="https://www.edgegamers.com/threads/321474/#post-3017196"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              EdgeGamers
            </a>{" "}
            Jailbreak Rules v1.0.0 • This is a parody/comedy site
          </p>
        </div>

        <div className="text-center text-muted-foreground text-sm mt-4 tracking-[0.3em] select-none">
          ─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─╫─
        </div>
      </div>
    </footer>
  );
};

export default Footer;
