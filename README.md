# HealthTracker

A comprehensive health and wellness tracking application built with Angular 19. Monitor your daily habits, read health articles, and maintain a healthy lifestyle with our intuitive dashboard.

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd HealthTracker

# Install dependencies
npm install

# Start development server
ng serve
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes.

##  Features

### Dashboard & Home
- **Daily Habit Tracker**: Monitor 12 different health and wellness habits
- **Progress Analytics**: Visual progress bars showing daily completion percentage
- **Category Organization**: Habits grouped by Health, Fitness, Mental Health, and Productivity
- **Local Storage**: Automatically saves and loads daily progress
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Health Articles
- **Curated Content**: Browse through health, fitness, nutrition, and wellness articles
- **Smart Search**: Real-time search functionality across titles, authors, and content
- **Category Filtering**: Filter articles by Nutrition, Fitness, Mental Health, and Wellness
- **Responsive Grid**: Adaptive layout that works on all screen sizes
- **Rich Article Cards**: Display author, publication date, read time, and category tags

### Landing Page
- **Modern Design**: Eye-catching hero section with animated backgrounds
- **Interactive Buttons**: Custom button components with multiple variants and states
- **Feature Showcase**: Highlight key application features
- **Smooth Animations**: Engaging transitions and loading states

### Reusable Components
- **Custom Button Component**: Multiple variants (primary, secondary, outline, ghost)
- **Loading States**: Elegant spinners and skeleton screens
- **Error Handling**: User-friendly error messages with retry functionality
- **Glassmorphism Design**: Modern UI with blur effects and gradients

## Technical Architecture

### Built With
- **Frontend**: Angular 19 (Standalone Components)
- **Styling**: SCSS with global variables
- **State Management**: Local component state with localStorage persistence
- **Design System**: Custom design tokens and reusable components
- **Responsive**: Mobile-first approach with breakpoint-based design

### Project Structure
```
src/
├── app/
│   ├── articles/              # Article listing and management
│   ├── home/                  # Dashboard and habit tracking
│   ├── landing-page/          # Marketing landing page
│   ├── navbar/                # Navigation component
│   ├── shared/
│   │   └── button/            # Reusable button component
├── styles/
│   ├── _variables.scss        # Global SCSS variables
└── assets/
    └── images/                # Static images and icons
```

### Key Technologies
- **Angular 19**: Latest features with standalone components
- **TypeScript**: Type-safe development
- **SCSS**: Advanced styling with variables and mixins
- **RxJS**: Reactive programming for data handling
- **Font Awesome**: Icon library for UI elements

## Core Functionalities

### Habit Tracking System
```typescript
interface Habit {
  id: number;
  name: string;
  icon: string;
  completed: boolean;
  category: 'health' | 'fitness' | 'mental' | 'productivity';
}
```

### Article Management System
```typescript
interface Article {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  imageUrl?: string;
  publishedAt: Date;
  readTime: number;
  tags: string[];
}
```

**Article Categories:**
- Nutrition
- Fitness
- Mental Health
- Wellness

### Data Persistence
- **localStorage Integration**: Automatic saving/loading of daily progress
- **Date-based Storage**: Progress tracked per day with automatic date handling
- **Error Handling**: Graceful fallbacks when localStorage is unavailable
- **SSR Compatible**: Server-side rendering support with browser detection

## 💾 Data Persistence - Progress Saved on Page Reload

Your daily habit progress is automatically saved and restored when you reload the page or return to the app.

### Key Implementation

```typescript
// Auto-save on every habit toggle
toggleHabit(habit: Habit): void {
  habit.completed = !habit.completed;
  this.saveTodayProgress(); // 🔄 Instant save
}

// Save to localStorage with date-based keys
private saveTodayProgress(): void {
  const today = this.currentDate.toDateString();
  const progress = this.habits.map(h => ({ id: h.id, completed: h.completed }));
  localStorage.setItem(`habits_${today}`, JSON.stringify(progress));
}

// Load progress on page initialization
private loadTodayProgress(): void {
  const today = this.currentDate.toDateString();
  const saved = localStorage.getItem(`habits_${today}`);
  if (saved) {
    JSON.parse(saved).forEach((p: any) => {
      const habit = this.habits.find(h => h.id === p.id);
      if (habit) habit.completed = p.completed;
    });
  }
}
```

### Features
**Instant Auto-Save** - Progress saved on every habit check/uncheck  
**Page Reload Recovery** - Data persists through browser refreshes  
**Daily Tracking** - Each day has separate progress storage  
**SSR Compatible** - Works with server-side rendering  

**Test it:** Check some habits → Refresh page (F5) → Progress restored!


### Color Palette
```scss
$bg-gradient: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
```

### Component Variants
- **Buttons**: Primary, Secondary
- **States**: Default, Hover, Active

### Responsive Breakpoints
```scss
$breakpoint-sm: 480px;
$breakpoint-md: 768px;
```

### Code Quality
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting with Angular-specific rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for quality assurance

## 🎬 Demo

![HealthTracker Demo](./public/demo/demo.gif)

*Complete walkthrough of the HealthTracker application*