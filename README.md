# AJ Long Electric Website

Professional electrical services website for Northern Virginia, DC, and Maryland.

## Project Structure

```
/
├── assets/                    # All static assets (CSS, JS, images)
│   ├── css/                  # Stylesheets
│   ├── js/                   # JavaScript files
│   ├── images/               # Image files
│   └── logos/                # Company logos
├── include/                   # Reusable HTML components
├── pages/                     # Main content pages
│   ├── index.html            # Homepage
│   ├── about.html            # About page
│   ├── services.html         # Services overview
│   ├── contact.html          # Contact page
│   ├── testimonials.html     # Customer testimonials
│   └── blog.html             # Blog index
├── locations/                 # Geographic service area pages
│   ├── virginia/
│   │   ├── cities/          # Major cities (Alexandria, Arlington, Fairfax, etc.)
│   │   ├── neighborhoods/   # Neighborhoods and suburbs
│   │   └── counties/        # County pages
│   ├── maryland/
│   └── dc/
├── services/                  # Service-specific pages
│   └── by-location/          # Service+location combination pages
├── index.html                 # Root homepage
├── robots.txt                 # Search engine crawler rules
├── sitemap.xml                # SEO sitemap
└── README.md                  # This file
```

## Naming Conventions

- **All lowercase** - Use lowercase for all files and directories
- **Hyphen-separated** - Use hyphens for multi-word names (e.g., `mount-vernon.html`)
- **Descriptive** - File names should clearly indicate content
- **No spaces** - Always use hyphens instead of spaces

## Development Notes

- Static HTML website
- Asset paths use absolute URLs starting with `/`
- Main content pages are in `pages/` directory
- Location pages organized by state, then by type (cities/neighborhoods/counties)
- Service+location specific pages in `services/by-location/`

## Maintenance

- Keep internal links updated when moving files
- Update sitemap.xml when adding new pages
- Follow naming conventions for all new files
- Test all pages after making structural changes

## Contact

AJ Long Electric
Serving Northern Virginia, DC, and Maryland
