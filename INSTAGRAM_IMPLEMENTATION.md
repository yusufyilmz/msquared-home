# Instagram Feed Implementation

## Overview

This project now uses the `react-social-media-embed` library to display Instagram posts with their photos/videos and captions. This is a much simpler approach that doesn't require backend API routes or Instagram access tokens.

## What Changed

### ✅ Added
- **New Component**: `components/instagram-feed-section.tsx` - Simple, clean Instagram feed section using `react-social-media-embed`
- **New Package**: `react-social-media-embed` - [Documentation](https://justinmahar.github.io/react-social-media-embed/?path=/docs/home--docs)

### ❌ Removed
- `components/instagram-embed.tsx` - Old custom embed component
- `components/instagram-feeds.tsx` - Old component using Instagram Graph API
- `components/instagram-oembed-card.tsx` - Old oEmbed card component
- `components/instagram-oembed-section.tsx` - Old oEmbed section component
- `components/instagram-embed-feeds.tsx` - Complex component with fallback logic
- `app/api/instagram-feed/route.ts` - API route for fetching feed via Graph API
- `app/api/instagram-post/route.ts` - API route for fetching individual posts
- `app/api/oig-embed/route.ts` - API route for fetching oEmbed data

### Benefits of New Approach

1. **No Backend Required**: No need for API routes or server-side Instagram API calls
2. **No Access Tokens**: Works with any public Instagram post URL
3. **Automatic Updates**: Instagram handles the embed, so you always see the latest data
4. **Built-in Captions**: The embed automatically includes captions and engagement data
5. **Responsive**: Automatically adapts to different screen sizes
6. **Simpler Code**: ~50 lines vs ~600+ lines of the old implementation

## Usage

### Basic Example

```typescript
import { InstagramFeedSection } from "@/components/instagram-feed-section";

export default function Page() {
  return (
    <InstagramFeedSection
      title="Studio feed"
      intro="Recent pieces and moments from Instagram."
      instagramHandle="@msquaredhome"
      instagramUrl="https://www.instagram.com/msquaredhome"
      postUrls={[
        "https://www.instagram.com/p/DHCTmj7MEMM/",
        "https://www.instagram.com/p/DQkkm6UDDm3/",
        "https://www.instagram.com/p/DQmFpu9DC07/",
        "https://www.instagram.com/p/DI3Uhjjskwu/",
      ]}
      maxPosts={4}
    />
  );
}
```

### Component Props

```typescript
interface InstagramFeedSectionProps {
  title?: string;              // Section eyebrow text (default: "Studio feed")
  intro?: string;              // Section heading text
  instagramHandle?: string;    // Your Instagram handle (default: "@msquaredhome")
  instagramUrl?: string;       // Your Instagram profile URL
  postUrls: string[];          // Array of Instagram post URLs (required)
  maxPosts?: number;           // Maximum number of posts to display (default: 4)
}
```

## How to Get Instagram Post URLs

1. Go to the Instagram post on Instagram.com
2. Copy the URL from your browser's address bar
3. The URL should look like: `https://www.instagram.com/p/{POST_ID}/`

Example URLs:
- Regular post: `https://www.instagram.com/p/DHCTmj7MEMM/`
- Reel: `https://www.instagram.com/reel/DQkkm6UDDm3/`

## Current Implementation

The component is currently being used in `app/page.tsx`:

```typescript
<InstagramFeedSection
  title={instagramFeed.sectionTitle}
  intro={instagramFeed.heading}
  instagramHandle={instagramFeed.instagramHandle}
  instagramUrl={instagramFeed.instagramUrl}
  postUrls={instagramFeed.posts}
  maxPosts={4}
/>
```

The post URLs are configured in `config/siteCopy.ts`:

```typescript
instagramFeed: {
  sectionTitle: "Msquared feed",
  heading: "Recent pieces and moments from Instagram.",
  instagramHandle: "@msquaredhome",
  instagramUrl: "https://www.instagram.com/msquaredhome",
  posts: [
    "https://www.instagram.com/p/DHCTmj7MEMM/",
    "https://www.instagram.com/p/DQkkm6UDDm3/",
    "https://www.instagram.com/p/DQmFpu9DC07/",
    "https://www.instagram.com/p/DI3Uhjjskwu/",
  ],
}
```

## Layout

The component displays posts in a responsive grid:
- **Mobile**: 1 column
- **Tablet**: 2 columns
- **Desktop**: 3 columns

Each post is wrapped in a styled container with:
- Rounded corners (rounded-2xl)
- Subtle border and shadow
- White/translucent background with backdrop blur

## Styling

The component uses your existing design system:
- `SectionShell` for consistent section layout
- Tailwind CSS classes for styling
- Neutral color palette matching your site design

## Environment Variables

**No environment variables are required!** 🎉

The old implementation required:
- `IG_USER_ID` - Your Instagram user ID
- `IG_ACCESS_TOKEN` - Instagram Graph API access token
- `IG_OEMBED_TOKEN` - Instagram oEmbed API token

These are no longer needed and can be removed from your `.env` file if you're not using them elsewhere.

## Troubleshooting

### Posts not loading?
- Make sure the Instagram post is **public** (not private)
- Verify the URL is correct and accessible
- Check browser console for any errors

### Embeds look weird?
- The embed is controlled by Instagram, so styling options are limited
- The component uses `captioned={true}` to show captions within the embed
- You can adjust the container styling in `instagram-feed-section.tsx`

### Want to display more/fewer posts?
- Change the `maxPosts` prop (default is 4)
- Update the grid layout classes if you want a different column structure

## Further Customization

To customize the component, edit `components/instagram-feed-section.tsx`:

- **Grid Layout**: Modify `className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"`
- **Container Style**: Adjust the div wrapping each `InstagramEmbed`
- **Section Layout**: Modify `SectionShell` props

## Documentation

- [react-social-media-embed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/home--docs) - Official library documentation
- [Instagram Embed](https://justinmahar.github.io/react-social-media-embed/?path=/docs/embeds-instagramembed--docs) - InstagramEmbed component docs

