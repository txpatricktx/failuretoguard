import { useState } from "react";
import Layout from "@/components/Layout";
import { ruleSections } from "@/data/rules";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RulesPage = () => {
  const [search, setSearch] = useState("");

  const filtered = ruleSections
    .map((section) => ({
      ...section,
      rules: section.rules.filter(
        (rule) =>
          rule.title.toLowerCase().includes(search.toLowerCase()) ||
          rule.content.some((c) => c.toLowerCase().includes(search.toLowerCase())) ||
          rule.id.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((section) => section.rules.length > 0);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
            📜 THE INMATE HANDBOOK
          </h1>
          <p className="text-lg text-muted-foreground">
            EdgeGamers Jailbreak Rules v1.0.0 — Now with added shame
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <Input
            placeholder="🔍 Search rules... (try 'freekill', 'warden', 'simon')"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pixel-border bg-card text-foreground font-retro text-lg h-12"
          />
        </div>

        {/* Rules Sections */}
        <Accordion type="multiple" className="space-y-4">
          {filtered.map((section) => (
            <AccordionItem
              key={section.id}
              value={section.id}
              className="pixel-border bg-card border-b-0"
            >
              <AccordionTrigger className="px-4 hover:no-underline hover:bg-secondary">
                <span className="font-pixel text-[0.6rem] sm:text-[0.7rem] text-foreground">
                  {section.icon} {section.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4">
                  {section.rules.map((rule) => (
                    <div key={rule.id} className="bg-secondary p-4 pixel-border">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="font-pixel text-[0.45rem] text-primary bg-primary/10 px-2 py-1 shrink-0">
                          {rule.id}
                        </span>
                        <h3 className="font-pixel text-[0.5rem] text-foreground leading-relaxed">
                          {rule.title}
                        </h3>
                      </div>
                      <ul className="space-y-1 mb-3">
                        {rule.content.map((line, i) => (
                          <li key={i} className="text-sm text-muted-foreground pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-primary">
                            {line}
                          </li>
                        ))}
                      </ul>
                      {rule.guardFail && (
                        <div className="bg-accent/10 border-l-4 border-accent p-3 mt-2">
                          <p className="font-pixel text-[0.4rem] text-accent mb-1">
                            ⚠️ GUARD FAIL EXAMPLE
                          </p>
                          <p className="text-sm text-foreground italic">
                            {rule.guardFail}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="font-pixel text-[0.6rem] text-muted-foreground">
              No rules found. Maybe that's your problem — you don't know any rules.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default RulesPage;
