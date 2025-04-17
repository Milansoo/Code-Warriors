
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

interface Language {
  code: string;
  name: string;
}

export function LanguageSelector() {
  const languages: Language[] = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "zh", name: "中文" },
    { code: "ar", name: "العربية" },
    { code: "ru", name: "Русский" },
    { code: "de", name: "Deutsch" },
    { code: "ja", name: "日本語" },
    { code: "hi", name: "हिन्दी" }
  ];

  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Select defaultValue={currentLanguage} onValueChange={setCurrentLanguage}>
        <SelectTrigger className="w-[180px] bg-white/90 backdrop-blur-sm shadow-md">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <SelectValue placeholder="Select language" />
          </div>
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
