import Layout from "@/components/Layout";
import { glossaryTerms } from "@/data/glossary";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const GlossaryPage = () => {
  const [search, setSearch] = useState("");

  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.official.toLowerCase().includes(search.toLowerCase()) ||
      t.funny.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
            📖 PRISON SLANG FOR DUMMIES
          </h1>
          <p className="text-lg text-muted-foreground">
            Official definitions vs. what they ACTUALLY mean
          </p>
        </div>

        <div className="mb-8">
          <Input
            placeholder="🔍 Search terms... (try 'freekill', 'freeze', 'LR')"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pixel-border bg-card text-foreground font-retro text-lg h-12"
          />
        </div>

        <div className="space-y-4">
          {filtered.map((term) => (
            <div key={term.term} className="pixel-border bg-card p-4 sm:p-6">
              <h3 className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-primary mb-3">
                {term.term}
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-secondary p-3 pixel-border">
                  <p className="font-pixel text-[0.4rem] text-pixel-green mb-1">
                    📗 OFFICIAL DEFINITION
                  </p>
                  <p className="text-sm text-muted-foreground">{term.official}</p>
                </div>
                <div className="bg-secondary p-3 pixel-border">
                  <p className="font-pixel text-[0.4rem] text-accent mb-1">
                    📕 WHAT IT ACTUALLY MEANS
                  </p>
                  <p className="text-sm text-foreground italic">{term.funny}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="font-pixel text-[0.6rem] text-muted-foreground">
              Term not found. You're on your own, inmate.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default GlossaryPage;
