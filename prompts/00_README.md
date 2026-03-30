# 🚀 S'K One Tech Support - Next.js Migration Prompt Series

This folder contains a **series of role-based prompts** to migrate your website to an Awwards-winning Next.js experience.

---

## 📋 How to Use This Series

1. **Run prompts in order** (01 → 08)
2. **Copy the entire prompt** from each file
3. **Paste into your LLM** (Claude, GPT-4, etc.)
4. **Save the output** before moving to the next prompt
5. **Each prompt builds on the previous** - don't skip!

---

## 🎯 Prompt Series Overview

| # | Prompt File | Phase | Purpose | Estimated Time |
|---|-------------|-------|---------|----------------|
| 01 | `01_research_analysis.md` | Research | Business analysis, competitive research, theme strategy | 5-10 min |
| 02 | `02_design_system.md` | Design | Colors, typography, components, animations | 10-15 min |
| 03 | `03_architecture_setup.md` | Setup | Next.js setup, folder structure, config files | 10-15 min |
| 04 | `04_core_components.md` | Build | Reusable components (Button, Card, animations) | 15-20 min |
| 05 | `05_home_page.md` | Build | Complete home page with all sections | 20-30 min |
| 06 | `06_inner_pages.md` | Build | Services, Projects, About, Contact pages | 20-30 min |
| 07 | `07_seo_performance.md` | Optimize | SEO, metadata, performance optimization | 10-15 min |
| 08 | `08_deployment_launch.md` | Launch | Deployment, analytics, final checklist | 10-15 min |

**Total Estimated Time:** 90-150 minutes

---

## 📁 File Structure

```
prompts/
├── 00_README.md              # This file
├── 01_research_analysis.md   # Phase 1: Research & Analysis
├── 02_design_system.md       # Phase 2: Design System
├── 03_architecture_setup.md  # Phase 3: Architecture & Setup
├── 04_core_components.md     # Phase 4: Core Components
├── 05_home_page.md           # Phase 5: Home Page
├── 06_inner_pages.md         # Phase 6: Inner Pages
├── 07_seo_performance.md     # Phase 7: SEO & Performance
├── 08_deployment_launch.md   # Phase 8: Deployment & Launch
└── outputs/                  # (Create this folder to save LLM outputs)
    ├── phase1_output.md
    ├── phase2_output.md
    └── ...
```

---

## 🔑 Tips for Best Results

### Before Starting:
- ✅ Ensure you have Node.js 18+ installed
- ✅ Have a code editor ready (VS Code recommended)
- ✅ Create a new folder for the Next.js project
- ✅ Keep your current website open for reference

### During Execution:
- 📝 **Save all outputs** in the `outputs/` folder
- 🎯 **Be specific** if you want changes (colors, layouts, etc.)
- ⚠️ **Don't skip steps** - each builds on the previous
- 💾 **Commit to git** after each phase

### If Something Goes Wrong:
- 🔄 Re-run the same prompt with "Try again, focusing on..."
- 📋 Copy-paste any error messages to the LLM
- 🎯 Ask for clarification before moving forward

---

## 🎨 Customization Options

Want to customize the output? Edit these variables in each prompt:

```
THEME_PREFERENCE: "Modern Tech Confidence" | "Bold Innovation" | "Minimal Sophistication"
COMPLEXITY_LEVEL: "Simple" | "Moderate" | "Advanced"
ANIMATION_LEVEL: "Minimal" | "Moderate" | "Heavy"
PRIORITY: "Speed" | "Design" | "Features"
```

---

## 📞 Support

If you get stuck:
1. Review the previous phase output
2. Re-run the prompt with more context
3. Ask the LLM to explain what went wrong
4. Check the `AWWARDS_MIGRATION_PROMPT.md` for reference

---

## 🏁 Ready to Start?

**Open `01_research_analysis.md` and begin!** 🚀

---

**Created:** March 30, 2026  
**For:** S'K One Tech Support  
**Target:** Next.js 15+ Awwards-Winning Website
