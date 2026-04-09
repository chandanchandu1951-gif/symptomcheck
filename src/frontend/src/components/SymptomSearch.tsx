import { Input } from "@/components/ui/input";
import { STATIC_SYMPTOMS } from "@/lib/backendClient";
import type { Symptom } from "@/types";
import { getBodyRegionLabel } from "@/types";
import { Search } from "lucide-react";
import { useRef, useState } from "react";
import { getRegionFromBodyRegion } from "./BodyDiagram";

type RegionKey =
  | "head"
  | "chest"
  | "abdomen"
  | "back"
  | "limbs"
  | "skin"
  | "general";

interface SymptomSearchProps {
  selectedIds: bigint[];
  activeRegion: RegionKey | null;
  onAdd: (symptom: Symptom) => void;
}

export function SymptomSearch({
  selectedIds,
  activeRegion,
  onAdd,
}: SymptomSearchProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = (() => {
    const base =
      activeRegion !== null
        ? STATIC_SYMPTOMS.filter(
            (s) => getRegionFromBodyRegion(s.bodyRegion) === activeRegion,
          )
        : STATIC_SYMPTOMS;

    if (query.length < 2) return [];
    return base
      .filter(
        (s) =>
          s.name.toLowerCase().includes(query.toLowerCase()) ||
          s.description.toLowerCase().includes(query.toLowerCase()),
      )
      .slice(0, 8);
  })();

  const handleSelect = (s: Symptom) => {
    if (!selectedIds.includes(s.id)) {
      onAdd(s);
    }
    setQuery("");
    setOpen(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative" data-ocid="symptom-search-container">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
      <Input
        ref={inputRef}
        placeholder={
          activeRegion
            ? `Search ${activeRegion} symptoms…`
            : "Search symptoms (e.g. headache, fever…)"
        }
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
        className="pl-9 bg-background"
        data-ocid="input-symptom-search"
      />
      {open && filtered.length > 0 && (
        <div
          className="absolute z-20 top-full mt-1 left-0 right-0 bg-card border border-border rounded-xl shadow-elevated overflow-hidden"
          data-ocid="symptom-dropdown"
        >
          {filtered.map((s) => {
            const alreadyAdded = selectedIds.includes(s.id);
            return (
              <button
                key={s.id.toString()}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => handleSelect(s)}
                disabled={alreadyAdded}
                className={`w-full px-4 py-2.5 text-left text-sm flex items-center justify-between group transition-colors ${
                  alreadyAdded
                    ? "opacity-40 cursor-not-allowed"
                    : "hover:bg-muted"
                }`}
                data-ocid={`symptom-option-${s.id}`}
              >
                <span className="text-foreground font-medium">{s.name}</span>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">
                  {getBodyRegionLabel(s.bodyRegion)}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
