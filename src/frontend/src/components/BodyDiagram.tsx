import type { BodyRegion } from "@/types";

type RegionKey =
  | "head"
  | "chest"
  | "abdomen"
  | "back"
  | "limbs"
  | "skin"
  | "general";

interface BodyDiagramProps {
  activeRegion: RegionKey | null;
  onRegionClick: (region: RegionKey | null) => void;
}

const regions: { key: RegionKey; label: string }[] = [
  { key: "head", label: "Head" },
  { key: "chest", label: "Chest" },
  { key: "abdomen", label: "Abdomen" },
  { key: "back", label: "Back" },
  { key: "limbs", label: "Limbs" },
  { key: "skin", label: "Skin" },
  { key: "general", label: "General" },
];

export function getRegionFromBodyRegion(region: BodyRegion): RegionKey {
  if ("head" in region) return "head";
  if ("chest" in region) return "chest";
  if ("abdomen" in region) return "abdomen";
  if ("back" in region) return "back";
  if ("limbs" in region) return "limbs";
  if ("skin" in region) return "skin";
  if ("throat" in region) return "head";
  return "general";
}

function regionClass(key: RegionKey, active: RegionKey | null): string {
  return `cursor-pointer transition-all duration-200 stroke-primary/60 ${
    active === key
      ? "fill-primary/30 stroke-primary"
      : "fill-primary/8 hover:fill-primary/20"
  }`;
}

function handleKeyDown(
  e: React.KeyboardEvent,
  key: RegionKey,
  active: RegionKey | null,
  onRegionClick: (r: RegionKey | null) => void,
) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    onRegionClick(active === key ? null : key);
  }
}

export function BodyDiagram({ activeRegion, onRegionClick }: BodyDiagramProps) {
  const toggle = (key: RegionKey) =>
    onRegionClick(activeRegion === key ? null : key);

  return (
    <div className="flex gap-3 items-start">
      {/* SVG body outline */}
      <div className="flex-shrink-0 relative" aria-hidden="true">
        <svg
          width="80"
          height="160"
          viewBox="0 0 80 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
          role="img"
          aria-label="Body diagram for region selection"
        >
          <title>Body diagram for region selection</title>
          {/* Head */}
          <ellipse
            cx="40"
            cy="20"
            rx="14"
            ry="16"
            className={regionClass("head", activeRegion)}
            strokeWidth="1.5"
            onClick={() => toggle("head")}
            onKeyDown={(e) =>
              handleKeyDown(e, "head", activeRegion, onRegionClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Head region"
            aria-pressed={activeRegion === "head"}
          />
          {/* Neck */}
          <rect
            x="35"
            y="34"
            width="10"
            height="8"
            rx="2"
            className="fill-primary/8 stroke-primary/30"
            strokeWidth="1"
          />
          {/* Chest */}
          <rect
            x="22"
            y="42"
            width="36"
            height="32"
            rx="6"
            className={regionClass("chest", activeRegion)}
            strokeWidth="1.5"
            onClick={() => toggle("chest")}
            onKeyDown={(e) =>
              handleKeyDown(e, "chest", activeRegion, onRegionClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Chest region"
            aria-pressed={activeRegion === "chest"}
          />
          {/* Abdomen */}
          <rect
            x="24"
            y="74"
            width="32"
            height="26"
            rx="4"
            className={regionClass("abdomen", activeRegion)}
            strokeWidth="1.5"
            onClick={() => toggle("abdomen")}
            onKeyDown={(e) =>
              handleKeyDown(e, "abdomen", activeRegion, onRegionClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Abdomen region"
            aria-pressed={activeRegion === "abdomen"}
          />
          {/* Left Arm */}
          <rect
            x="7"
            y="44"
            width="13"
            height="44"
            rx="6"
            className={regionClass("limbs", activeRegion)}
            strokeWidth="1.5"
            onClick={() => toggle("limbs")}
            onKeyDown={(e) =>
              handleKeyDown(e, "limbs", activeRegion, onRegionClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Left arm region"
            aria-pressed={activeRegion === "limbs"}
          />
          {/* Right Arm */}
          <rect
            x="60"
            y="44"
            width="13"
            height="44"
            rx="6"
            className={regionClass("limbs", activeRegion)}
            strokeWidth="1.5"
            onClick={() => toggle("limbs")}
            onKeyDown={(e) =>
              handleKeyDown(e, "limbs", activeRegion, onRegionClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Right arm region"
            aria-pressed={activeRegion === "limbs"}
          />
          {/* Left Leg */}
          <rect
            x="24"
            y="100"
            width="14"
            height="52"
            rx="6"
            className={regionClass("limbs", activeRegion)}
            strokeWidth="1.5"
            onClick={() => toggle("limbs")}
            onKeyDown={(e) =>
              handleKeyDown(e, "limbs", activeRegion, onRegionClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Left leg region"
            aria-pressed={activeRegion === "limbs"}
          />
          {/* Right Leg */}
          <rect
            x="42"
            y="100"
            width="14"
            height="52"
            rx="6"
            className={regionClass("limbs", activeRegion)}
            strokeWidth="1.5"
            onClick={() => toggle("limbs")}
            onKeyDown={(e) =>
              handleKeyDown(e, "limbs", activeRegion, onRegionClick)
            }
            tabIndex={0}
            role="button"
            aria-label="Right leg region"
            aria-pressed={activeRegion === "limbs"}
          />
        </svg>
      </div>

      {/* Region buttons */}
      <div className="flex-1 grid grid-cols-2 gap-1.5">
        {regions.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => toggle(key)}
            className={`px-2.5 py-1.5 text-xs font-medium rounded-lg border transition-all duration-200 text-left ${
              activeRegion === key
                ? "bg-primary/15 border-primary text-primary shadow-xs"
                : "bg-background border-border text-muted-foreground hover:bg-muted hover:text-foreground hover:border-primary/30"
            }`}
            data-ocid={`body-region-${key}`}
          >
            {label}
          </button>
        ))}
        {activeRegion && (
          <button
            type="button"
            onClick={() => onRegionClick(null)}
            className="col-span-2 px-2.5 py-1 text-xs font-medium rounded-lg border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-200"
            data-ocid="body-region-clear"
          >
            Clear filter
          </button>
        )}
      </div>
    </div>
  );
}
