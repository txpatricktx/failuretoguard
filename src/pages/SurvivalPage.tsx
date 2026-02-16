import Layout from "@/components/Layout";
import { survivalTips } from "@/data/survivalGuide";
import { Link } from "react-router-dom";

const SurvivalPage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="font-pixel text-sm sm:text-lg text-primary mb-2">
            💀 SURVIVAL GUIDE
          </h1>
          <p className="text-lg text-muted-foreground">
            How to Not Get Slayed — A Guide for the Hopelessly Incompetent
          </p>
        </div>

        <div className="pixel-border bg-card p-4 mb-8">
          <p className="font-pixel text-[0.45rem] text-accent text-center">
            ⚠️ DISCLAIMER: Following these tips does not guarantee survival. Nothing can save you from yourself.
          </p>
        </div>

        <div className="space-y-6">
          {survivalTips.map((tip, index) => (
            <div key={tip.id} className="pixel-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="bg-secondary pixel-border w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center text-3xl">
                    {tip.icon}
                  </div>
                  <p className="font-pixel text-[0.35rem] text-muted-foreground text-center mt-1">
                    TIP #{index + 1}
                  </p>
                </div>

                <div className="flex-1">
                  <h3 className="font-pixel text-[0.55rem] sm:text-[0.65rem] text-primary mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-lg text-foreground font-bold mb-2">
                    "{tip.tip}"
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {tip.detail}
                  </p>
                  <Link
                    to="/rules"
                    className="font-pixel text-[0.4rem] text-accent hover:text-primary transition-colors"
                  >
                    📜 Related Rule: {tip.relatedRule}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final message */}
        <div className="pixel-border bg-secondary p-6 mt-8 text-center">
          <p className="font-pixel text-[0.5rem] text-foreground mb-2">
            🎓 GRADUATION STATUS
          </p>
          <p className="text-lg text-muted-foreground">
            If you've read all 12 tips and still freekill someone next round, there is no hope for you. 
            Please consider a career change. May we suggest Prisoner?
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default SurvivalPage;
