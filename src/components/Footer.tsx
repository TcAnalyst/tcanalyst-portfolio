export default function Footer() {
  return (
    <footer className="py-14 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-medium text-cream">Tochukwu ilechukwu</div>
          <div className="text-sm text-muted mt-1">
            DeFi Data Analyst & Researcher
          </div>
        </div>

        <div className="flex gap-6 text-sm text-muted">
          <a href="https://x.com/tc_junior1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            X
          </a>
          <a href="https://www.linkedin.com/in/ilechukwu-e-438908127" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
          <a href="https://medium.com/@tcanalyst" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            medium
          </a>
          <a href="https://t.co/XHbeLQ8JjU" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Resume
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 text-xs text-muted/50">
        © {new Date().getFullYear()} Tochukwu ilechukwu. All rights reserved.
      </div>
    </footer>
  );
}