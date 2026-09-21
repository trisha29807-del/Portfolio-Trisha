import type { ReactNode } from "react";
import { ArrowUpRight, Github } from "lucide-react";

const RESEARCH_URL =
  "https://drive.google.com/file/d/1dkGCQcGaTnkIngruiT7oCiB3d-b1QGYn/view?usp=sharing";
const GITHUB_URL =
  "https://github.com/trisha29807-del/Fake-News-Detection-Machine-Learning-Model";

interface DetailSectionProps {
  number: string;
  title: string;
  children: ReactNode;
}

function DetailSection({ number, title, children }: DetailSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-3 py-8 first:pt-0 last:pb-0 sm:grid-cols-[100px_1fr] sm:gap-8">
      <div className="flex items-baseline gap-2 sm:flex-col sm:items-start sm:gap-1">
        <span className="font-serif text-[1.5rem] leading-none text-day-burgundy/70 dark:text-night-burgundy/70">
          {number}
        </span>
        <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-day-burgundy dark:text-night-burgundy">
          {title}
        </span>
      </div>
      <div className="text-[14.5px] leading-relaxed text-day-ink/85 dark:text-night-ink/85">
        {children}
      </div>
    </div>
  );
}

export function FakeNewsDetail() {
  return (
    <div className="divide-y divide-day-border dark:divide-night-border">
      <DetailSection number="01" title="Overview">
        <p>
          Fake news spreads quickly across digital platforms, and most
          detection systems offer a label with no explanation. This project
          builds a fake news classifier that also explains{" "}
          <em className="italic">why</em> it made a given prediction —
          combining classical ML baselines, a fine-tuned transformer,
          explainability methods, and a generative-AI layer that turns that
          explanation into plain English.
        </p>
      </DetailSection>

      <DetailSection number="02" title="Approach">
        <p>
          News text is drawn from three combined benchmark datasets (LIAR,
          FakeNewsNet, and Fakeddit). Classical baselines (Naïve Bayes,
          Logistic Regression, Linear SVM, Random Forest) are trained on
          TF–IDF features to establish reference performance. The core
          classifier is{" "}
          <strong className="font-semibold">DistilBERT</strong>, fine-tuned
          for binary real/fake classification, which outperformed every
          classical baseline in the paper&rsquo;s evaluation.
        </p>
      </DetailSection>

      <DetailSection number="03" title="Explainability">
        <p>
          Every prediction is paired with{" "}
          <strong className="font-semibold">SHAP</strong> and{" "}
          <strong className="font-semibold">LIME</strong> attribution,
          showing which words pushed the model toward its decision. The plot
          on the project card above is an actual SHAP waterfall exported from
          the trained model, showing how individual words accumulate toward a
          "fake" prediction.
        </p>
      </DetailSection>

      <DetailSection number="04" title="Generative Explanation">
        <p>
          The predicted label, confidence score, and top SHAP-attributed
          words are passed into{" "}
          <strong className="font-semibold">Google Gemini</strong>, which
          generates a short, natural-language explanation grounded in those
          features.{" "}
          <span className="text-day-muted dark:text-night-muted">
            Gemini explains the prediction — it does not perform the
            classification itself; DistilBERT does.
          </span>
        </p>
      </DetailSection>

      <DetailSection number="05" title="Results">
        <p className="mb-3">
          As reported in the accompanying research paper, DistilBERT
          outperformed all classical baselines (the strongest of which,
          Random Forest, reached 72.01% accuracy):
        </p>
        <ul className="mb-3 flex flex-wrap gap-x-6 gap-y-1.5">
          <li>
            <strong className="font-semibold text-day-ink dark:text-night-ink">
              78.13%
            </strong>{" "}
            Accuracy
          </li>
          <li>
            <strong className="font-semibold text-day-ink dark:text-night-ink">
              73.09%
            </strong>{" "}
            Precision
          </li>
          <li>
            <strong className="font-semibold text-day-ink dark:text-night-ink">
              71.82%
            </strong>{" "}
            Recall
          </li>
          <li>
            <strong className="font-semibold text-day-ink dark:text-night-ink">
              73.13%
            </strong>{" "}
            F1 Score
          </li>
        </ul>
        <p className="text-day-muted dark:text-night-muted">
          The paper also includes a confusion matrix, ROC curve, and
          precision–recall curve for the full evaluation — see the research
          paper for those visualizations in detail.
        </p>
      </DetailSection>

      <DetailSection number="06" title="Research">
        <p className="mb-5">
          This project is documented in a research paper covering the full
          methodology, model architecture, explainability approach, and
          evaluation — co-authored during the internship.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={RESEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-day-burgundy px-6 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-bg transition-all duration-300 ease-editorial hover:-translate-y-px hover:shadow-[0_10px_24px_-8px_rgba(122,22,38,0.45)] dark:bg-night-burgundy dark:text-night-bg dark:hover:shadow-[0_10px_24px_-8px_rgba(199,73,92,0.35)]"
          >
            Read Research
            <ArrowUpRight size={14} strokeWidth={1.75} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-day-ink/70 px-5 py-3.5 text-[12px] font-medium tracking-[0.12em] uppercase text-day-ink transition-all duration-300 ease-editorial hover:-translate-y-px hover:bg-day-ink hover:text-day-bg dark:border-night-ink/60 dark:text-night-ink dark:hover:bg-night-ink dark:hover:text-night-bg"
          >
            GitHub
            <Github size={14} strokeWidth={1.75} />
          </a>
        </div>
      </DetailSection>
    </div>
  );
}