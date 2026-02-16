import { useState } from "react";
import Layout from "@/components/Layout";
import { formalSections, FormalSubItem } from "@/data/formalRules";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const SubItemList = ({ items, depth = 0 }: { items: FormalSubItem[]; depth?: number }) => {
  const indent = depth === 0 ? "pl-6" : depth === 1 ? "pl-10" : "pl-14";
  return (
    <ul className={`space-y-1 ${indent}`}>
      {items.map((item) => (
        <li key={item.id} className="relative">
          <div className="flex gap-2">
            <span className="text-primary font-mono text-sm shrink-0">{item.id}.</span>
            <span className="text-base text-muted-foreground">{item.text}</span>
          </div>
          {item.footnote && (
            <p className="text-sm text-muted-foreground/70 italic ml-8 mt-0.5">
              Note: {item.footnote}
            </p>
          )}
          {item.subitems && <SubItemList items={item.subitems} depth={depth + 1} />}
        </li>
      ))}
    </ul>
  );
};

const FormalRulesPage = () => {
  const [search, setSearch] = useState("");

  const matchesSearch = (text: string) =>
    text.toLowerCase().includes(search.toLowerCase());

  const itemMatchesSearch = (item: FormalSubItem): boolean =>
    matchesSearch(item.text) ||
    (item.footnote ? matchesSearch(item.footnote) : false) ||
    (item.subitems ? item.subitems.some(itemMatchesSearch) : false);

  const filtered = formalSections
    .map((section) => ({
      ...section,
      rules: section.rules.filter(
        (rule) =>
          matchesSearch(rule.title) ||
          matchesSearch(rule.id) ||
          (rule.preamble ? matchesSearch(rule.preamble) : false) ||
          (rule.paragraphs ? rule.paragraphs.some(matchesSearch) : false) ||
          (rule.items ? rule.items.some(itemMatchesSearch) : false)
      ),
    }))
    .filter((section) => section.rules.length > 0);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
            📄 FORMAL RULES
          </h1>
          <p className="text-lg text-muted-foreground">
            EdgeGamers Jailbreak Rules v1.0.0
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Last Modified October 15, 2025
          </p>
          <div className="bg-secondary pixel-border p-4 mt-4 text-left">
            <p className="text-base text-muted-foreground italic">
              Jailbreak is a gamemode involving two teams—Guards and Prisoners, with the Warden attempting to control the Prisoners. This document describes the rules that EdgeGamers uses for Jailbreak. For ambiguities, questions, or other issues, contact a Counter-Strike Admin Trainer or Leadership.
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <Input
            placeholder="🔍 Search formal rules..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pixel-border bg-card text-foreground font-retro text-lg h-12"
          />
        </div>

        {/* Sections */}
        <Accordion type="multiple" className="space-y-4">
          {filtered.map((section) => (
            <AccordionItem
              key={section.id}
              value={section.id}
              className="pixel-border bg-card border-b-0"
            >
              <AccordionTrigger className="px-4 hover:no-underline hover:bg-secondary">
                <span className="font-pixel text-[0.6rem] sm:text-[0.7rem] text-foreground">
                  {section.number ? `§${section.number}` : "§"} {section.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                {section.preamble && (
                  <p className="text-base text-muted-foreground mb-4 italic">{section.preamble}</p>
                )}
                <div className="space-y-4">
                  {section.rules.map((rule) => (
                    <div key={rule.id} className="bg-secondary p-4 pixel-border">
                      <div className="flex items-start gap-2 mb-2">
                        <span className="font-pixel text-[0.55rem] text-primary bg-primary/10 px-2 py-1 shrink-0">
                          {rule.id}
                        </span>
                        <h3 className="font-pixel text-[0.6rem] text-foreground leading-relaxed">
                          {rule.title}
                        </h3>
                      </div>

                      {rule.preamble && (
                        <p className="text-base text-muted-foreground mb-2">{rule.preamble}</p>
                      )}

                      {rule.paragraphs && (
                        <div className="space-y-2 mb-2">
                          {rule.paragraphs.map((p, i) => (
                            <p key={i} className="text-base text-muted-foreground">{p}</p>
                          ))}
                        </div>
                      )}

                      {rule.items && <SubItemList items={rule.items} />}
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
              No rules found matching your search.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FormalRulesPage;
