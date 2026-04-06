# DataOfis Partners --- Navigation Overlay Specification

## JSON CONFIG

``` json
{
  "component": "NavigationOverlay",
  "trigger": "hamburger_click",
  "close_actions": ["close_icon", "esc_key", "navigation_click"],
  "layout": {
    "type": "full_screen_overlay",
    "columns": {
      "left": {
        "width": "38%",
        "content": ["How We Work", "What We Cover", "About", "Contact"]
      },
      "right": {
        "width": "62%",
        "dynamic": true
      }
    }
  },
  "sections": {
    "How We Work": {
      "items": ["Diagnose", "Define", "Execute", "Embed"]
    },
    "What We Cover": {
      "items": ["Direction", "Architecture & Design", "Organization & Control", "Execution & Adoption"]
    },
    "About": {
      "items": ["Who stands behind this", "Principles", "Founder"]
    },
    "Contact": {
      "cta": "Schedule Executive Data Review"
    }
  }
}
```

------------------------------------------------------------------------

## LAYOUT SPECIFICATIONS

-   Overlay: full screen, fixed, z-index above all
-   Background: dark neutral
-   Divider: subtle vertical line between columns

### Column Proportions

-   Left: 38%
-   Right: 62%
-   Max width: 1440px
-   Centered container

------------------------------------------------------------------------

## TYPOGRAPHY SYSTEM

### Left Navigation

-   Font size: 28px
-   Weight: 600
-   Line height: 36px
-   Spacing between items: 20px

### Active Item

-   Weight: 700
-   Slight color emphasis

### Right Panel Titles

-   Font size: 32px
-   Weight: 700
-   Line height: 40px

### Right Panel Items

-   Font size: 18px
-   Weight: 400--500
-   Line height: 28px
-   Spacing: 12--16px

### Body Text

-   Font size: 16px
-   Line height: 26px

------------------------------------------------------------------------

## INTERACTION RULES

-   Hover on left → updates right instantly
-   Click → navigate + close overlay
-   ESC → close
-   Disable background scroll

------------------------------------------------------------------------

## ANIMATION

-   Duration: 200--300ms
-   Type: fade + slight upward motion
-   No bounce or easing exaggeration

------------------------------------------------------------------------

## DESIGN PRINCIPLES

-   No decorative elements
-   No icons except menu/close
-   Grid-based layout
-   Executive, controlled feel

------------------------------------------------------------------------

## IMPLEMENTATION NOTES

-   Next.js component
-   Controlled via global state
-   Prevent body scroll when active
-   Keyboard accessible
