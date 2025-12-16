import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

interface ShareButtonProps {
  title: string;
  text?: string;
  url?: string;
  className?: string;
  variant?: 'default' | 'compact';
}

export function ShareButton({
  title,
  text,
  url,
  className = '',
  variant = 'default',
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const shareUrl = url || window.location.href;

  const handleShare = async () => {
    // Try native share first (mobile devices, some desktop browsers)
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: text || `Check out "${title}" on The Ribbit Report!`,
          url: shareUrl,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fall through to copy
        if ((err as Error).name === 'AbortError') {
          return; // User cancelled, do nothing
        }
      }
    }

    // Fallback: copy to clipboard
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Last resort fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (variant === 'compact') {
    return (
      <button
        onClick={handleShare}
        className={`p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors ${className}`}
        aria-label={copied ? 'Link copied!' : 'Share this page'}
        title={copied ? 'Link copied!' : 'Share'}
      >
        {copied ? (
          <Check size={18} className="text-[#81C784]" />
        ) : (
          <Share2 size={18} className="text-white" />
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleShare}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F5E9] dark:bg-[#1B3D2F] hover:bg-[#C8E6C9] dark:hover:bg-[#2D5A3D] transition-colors ${className}`}
      aria-label={copied ? 'Link copied!' : 'Share this page'}
    >
      {copied ? (
        <>
          <Check size={16} className="text-[#2D5A3D] dark:text-[#81C784]" />
          <span className="text-sm font-medium text-[#2D5A3D] dark:text-[#81C784]">
            Link Copied!
          </span>
        </>
      ) : (
        <>
          <Share2 size={16} className="text-[#2D5A3D] dark:text-[#81C784]" />
          <span className="text-sm font-medium text-[#2D5A3D] dark:text-[#81C784]">
            Share
          </span>
        </>
      )}
    </button>
  );
}
