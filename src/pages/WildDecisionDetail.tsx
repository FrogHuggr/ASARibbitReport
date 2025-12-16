import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, RotateCcw, Lightbulb, MessageCircle, ChevronRight } from 'lucide-react';
import { getDilemmaBySlug } from '../data/wildDecisions';
import type { ChoiceId } from '../data/wildDecisions';
import { ShareButton } from '../components/ShareButton';

export function WildDecisionDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedChoice, setSelectedChoice] = useState<ChoiceId | null>(null);

  const dilemma = slug ? getDilemmaBySlug(slug) : undefined;

  if (!dilemma) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6">
        <p className="text-[#6B7280] dark:text-[#9CA3AF] mb-4">
          Dilemma not found
        </p>
        <Link
          to="/wild-decisions"
          className="text-[#2D5A3D] dark:text-[#81C784] font-medium"
        >
          Back to Wild Decisions
        </Link>
      </div>
    );
  }

  const handleChoiceSelect = (choiceId: ChoiceId) => {
    setSelectedChoice(choiceId);
    // Scroll to reveal section
    setTimeout(() => {
      document.getElementById('outcome-reveal')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleReset = () => {
    setSelectedChoice(null);
    // Scroll back to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedChoiceData = selectedChoice
    ? dilemma.choices.find((c) => c.id === selectedChoice)
    : null;

  return (
    <div className="pb-10">
      {/* Back navigation */}
      <header className="px-4 py-3 flex items-center gap-2">
        <button
          onClick={() => navigate('/wild-decisions')}
          className="flex items-center gap-1 text-[#6B7280] dark:text-[#9CA3AF] text-sm hover:text-[#2D5A3D] dark:hover:text-[#81C784] transition-colors"
        >
          <ChevronLeft size={18} />
          Wild Decisions
        </button>
      </header>

      {/* Hero illustration */}
      <section className="relative h-48 overflow-hidden">
        <img
          src={dilemma.illustration}
          alt={dilemma.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="px-4 pt-5">
        {/* Label chip */}
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold uppercase tracking-wider text-[#8B7355] dark:text-[#C9A961] bg-[#F5E6D3] dark:bg-[#3D3020] rounded-full">
          {dilemma.label}
        </span>

        {/* Title */}
        <h1 className="font-display text-2xl font-bold text-[#2D2D2D] dark:text-white mb-4 leading-tight">
          {dilemma.title}
        </h1>

        {/* Scenario paragraphs */}
        <div className="space-y-4 mb-6">
          {dilemma.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Choice prompt */}
        <div className="border-t border-[#E5E5E5] dark:border-[#374151] pt-5">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#6B7280] dark:text-[#9CA3AF] mb-4">
            {dilemma.prompt}
          </p>

          {/* Choice buttons */}
          <div className="space-y-3">
            {dilemma.choices.map((choice) => (
              <button
                key={choice.id}
                onClick={() => handleChoiceSelect(choice.id)}
                disabled={selectedChoice !== null}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  selectedChoice === choice.id
                    ? 'border-[#2D5A3D] dark:border-[#81C784] bg-[#E8F5E9] dark:bg-[#1B3D2F]'
                    : selectedChoice !== null
                      ? 'border-[#E5E5E5] dark:border-[#374151] opacity-50 cursor-not-allowed'
                      : 'border-[#E5E5E5] dark:border-[#374151] hover:border-[#2D5A3D] dark:hover:border-[#81C784] hover:bg-[#F7F5F0] dark:hover:bg-[#242424] active:scale-[0.98]'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm ${
                      selectedChoice === choice.id
                        ? 'bg-[#2D5A3D] text-white'
                        : 'bg-[#E5E5E5] dark:bg-[#374151] text-[#6B7280] dark:text-[#9CA3AF]'
                    }`}
                  >
                    {choice.id}
                  </span>
                  <span className="text-[#2D2D2D] dark:text-white leading-snug pt-0.5">
                    {choice.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome reveal */}
      {selectedChoice && selectedChoiceData && (
        <section id="outcome-reveal" className="px-4 pt-8 animate-fade-in">
          {/* You picked badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#2D5A3D] text-white font-bold">
              You picked: {selectedChoice}
            </div>
          </div>

          {/* What could happen panel */}
          <div className="bg-[#F7F5F0] dark:bg-[#1a1a1a] rounded-xl p-5 border-l-4 border-[#8B7355] mb-5">
            <h2 className="font-display text-lg font-bold text-[#2D2D2D] dark:text-white mb-3 flex items-center gap-2">
              {selectedChoiceData.outcomeTitle}
            </h2>
            <p className="text-[#4B5563] dark:text-[#D1D5DB] leading-relaxed">
              {selectedChoiceData.outcomeBody}
            </p>
          </div>

          {/* Smart questions panel */}
          <div className="bg-[#E8F5E9] dark:bg-[#1B3D2F] rounded-xl p-5 mb-5">
            <h2 className="font-display text-lg font-bold text-[#2D5A3D] dark:text-[#81C784] mb-3 flex items-center gap-2">
              <MessageCircle size={20} />
              Smart questions to ask next
            </h2>
            <ul className="space-y-2">
              {selectedChoiceData.questions.map((question, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-[#4B5563] dark:text-[#D1D5DB]"
                >
                  <span className="text-[#2D5A3D] dark:text-[#81C784] mt-1">•</span>
                  <span>{question}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mini-lesson */}
          <div className="bg-[#FEF3C7] dark:bg-[#4A4000] rounded-xl p-4 flex items-start gap-3 mb-6">
            <Lightbulb size={20} className="text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <p className="text-[#92400E] dark:text-[#FCD34D] text-sm italic leading-relaxed">
              {dilemma.miniLesson}
            </p>
          </div>

          {/* Cross-link if available */}
          {dilemma.crossLink && (
            <Link
              to={dilemma.crossLink.path}
              className="block mb-6 p-4 rounded-xl bg-white dark:bg-[#242424] border border-[#E5E5E5] dark:border-[#374151] hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-[#6B7280] dark:text-[#9CA3AF] mb-1">
                    Related content
                  </p>
                  <p className="text-[#2D5A3D] dark:text-[#81C784] font-medium">
                    {dilemma.crossLink.label}
                  </p>
                </div>
                <ChevronRight size={20} className="text-[#9CA3AF]" />
              </div>
            </Link>
          )}

          {/* Action buttons */}
          <div className="space-y-3">
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white dark:bg-[#242424] border-2 border-[#2D5A3D] dark:border-[#81C784] text-[#2D5A3D] dark:text-[#81C784] font-bold transition-colors hover:bg-[#E8F5E9] dark:hover:bg-[#1B3D2F] active:scale-[0.98]"
            >
              <RotateCcw size={20} />
              Try a different choice
            </button>

            <Link
              to="/wild-decisions"
              className="block w-full text-center py-4 rounded-xl bg-[#F7F5F0] dark:bg-[#1a1a1a] text-[#6B7280] dark:text-[#9CA3AF] font-medium transition-colors hover:bg-[#E5E5E5] dark:hover:bg-[#242424]"
            >
              Back to Wild Decisions
            </Link>
          </div>

          {/* Share button */}
          <div className="flex justify-center mt-6">
            <ShareButton
              title={`${dilemma.title} - Wild Decisions`}
              text={`What would YOU do? ${dilemma.title} - a conservation dilemma from The Ribbit Report!`}
            />
          </div>
        </section>
      )}
    </div>
  );
}
