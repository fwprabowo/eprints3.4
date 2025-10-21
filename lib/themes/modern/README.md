# Modern EPrints Theme

A clean, modern, and responsive theme for EPrints repositories.

## Features

- **Modern Design**: Clean and contemporary user interface
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **Easy Customization**: CSS variables for quick color and style changes
- **Accessible Navigation**: ARIA-compliant menu system
- **Enhanced Search**: Improved search interface with modern styling
- **Grid-based Homepage**: Card-style layout for repository features

## Installation

This theme is located in `lib/themes/modern/` and follows the standard EPrints theme structure.

### Activating the Theme

To activate this theme for your repository, edit your repository configuration file:

**Location**: `archives/ARCHIVEID/cfg/cfg.d/theme.pl`

```perl
# Set the theme
$c->{theme} = "modern";
```

After changing the theme, regenerate your repository's static files:

```bash
bin/epadmin reload ARCHIVEID
bin/generate_static ARCHIVEID
```

## Structure

```
modern/
├── README.md                              # This file
├── templates/                             # Base templates
│   └── default.xml                        # Main template
├── lang/                                  # Language-specific files
│   └── en/                                # English language files
│       ├── templates/                     # English templates
│       │   └── default.xml
│       ├── phrases/                       # English phrases
│       │   └── modern_theme_phrases.xml
│       └── static/                        # English static files
│           └── index.xpage                # Homepage
└── static/                                # Static assets
    ├── favicon.ico                        # Site favicon
    ├── images/                            # Images
    │   └── site_logo.png                  # Site logo
    ├── style/                             # Stylesheets
    │   ├── modern_theme.css               # Main theme CSS
    │   └── auto/                          # Auto-generated CSS
    │       └── modern_theme_auto.css
    └── javascript/                        # JavaScript files
        ├── modern_theme.js                # Main theme JavaScript
        └── auto/                          # Auto-generated JavaScript
            └── modern_theme_auto.js
```

## Customization

### Colors and Styling

The theme uses CSS custom properties (variables) for easy customization. Edit `static/style/modern_theme.css` and modify the `:root` section:

```css
:root {
  --primary-color: #2563eb;      /* Main theme color */
  --primary-hover: #1d4ed8;      /* Hover state color */
  --text-color: #1e293b;         /* Main text color */
  --background-color: #ffffff;   /* Page background */
  /* ... more variables ... */
}
```

### Logo

Replace `static/images/site_logo.png` with your institution's logo. Recommended dimensions: 200px width, 50px height.

### Navigation Menu

Edit the template files to customize navigation:
- `lang/en/templates/default.xml` - Modify the `<nav>` section

### Homepage Content

Customize the homepage by editing:
- `lang/en/static/index.xpage` - Homepage layout and content

### Phrases and Text

Add custom text strings in:
- `lang/en/phrases/modern_theme_phrases.xml`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Overview

### Responsive Navigation
- Desktop: Horizontal menu with dropdown submenus
- Mobile: Stacked menu with touch-friendly interactions

### Enhanced Search
- Prominent search bar in header
- Modern input styling with focus states
- Quick search functionality

### Homepage Features
- Hero section with gradient background
- Grid layout for repository features
- RSS/Atom feed links
- OAI-PMH information

### Footer
- Multi-column layout (desktop)
- Quick links
- EPrints branding
- Responsive stacking on mobile

## Development

### CSS Architecture
- Mobile-first responsive design
- CSS Grid and Flexbox layouts
- Custom properties for theming
- Print styles included

### JavaScript Features
- Dropdown menu interactions
- Search enhancements
- Mobile menu support
- Progressive enhancement

## Support

For issues or questions about this theme:
- Check the [EPrints Wiki](https://wiki.eprints.org/)
- Visit [EPrints Forums](https://forums.eprints.org/)
- Review [EPrints Documentation](https://wiki.eprints.org/w/Category:Documentation)

## License

This theme follows the same license as EPrints (GPL).

## Version

- **Version**: 1.0.0
- **EPrints Compatibility**: 3.4+
- **Created**: 2025
