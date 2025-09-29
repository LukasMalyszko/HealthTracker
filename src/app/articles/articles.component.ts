import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  imageUrl?: string;
  publishedAt: Date;
  readTime: number;
  tags: string[];
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class ArticlesComponent implements OnInit {
  articles: Article[] = [];
  filteredArticles: Article[] = [];
  loading = true;
  error: string | null = null;
  searchTerm = '';
  selectedCategory = '';

  ngOnInit() {
    this.loadArticles();
  }

  loadArticles() {
    this.loading = true;
    this.error = null;

    // Simulate API call with mock data
    setTimeout(() => {
      try {
        this.articles = this.getMockArticles();
        this.filteredArticles = [...this.articles];
        this.loading = false;
      } catch (err) {
        this.error = 'Failed to load articles. Please try again.';
        this.loading = false;
      }
    }, 1500);
  }

  filterArticles() {
    this.filteredArticles = this.articles.filter(article => {
      const matchesSearch = !this.searchTerm || 
        article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        article.author.toLowerCase().includes(this.searchTerm.toLowerCase());

      const matchesCategory = !this.selectedCategory || 
        article.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }

  openArticle(article: Article) {
    // Implement navigation to article detail
    console.log('Opening article:', article.title);
  }

  // Mock data for demonstration purposes because there's no free health articles api
  private getMockArticles(): Article[] {
    return [
      {
        id: '1',
        title: '10 Superfoods for Optimal Health',
        excerpt: 'Discover the nutritional powerhouses that can transform your health and boost your energy levels naturally.',
        content: '',
        author: 'Dr. Sarah Johnson',
        category: 'nutrition',
        imageUrl: '/images/superfoods.jpg',
        publishedAt: new Date('2024-09-25'),
        readTime: 5,
        tags: ['nutrition', 'superfoods', 'healthy eating']
      },
      {
        id: '2',
        title: 'The Ultimate Guide to Home Workouts',
        excerpt: 'Stay fit without a gym membership. Learn effective exercises you can do in your living room.',
        content: '',
        author: 'Mike Thompson',
        category: 'fitness',
        imageUrl: '/images/home-workout.jpg',
        publishedAt: new Date('2024-09-20'),
        readTime: 8,
        tags: ['fitness', 'home workout', 'exercise']
      },
      {
        id: '3',
        title: 'Managing Stress in Modern Life',
        excerpt: 'Practical strategies to reduce stress and improve your mental well-being in today\'s fast-paced world.',
        content: '',
        author: 'Dr. Emily Chen',
        category: 'mental-health',
        imageUrl: '/images/stress-management.jpg',
        publishedAt: new Date('2024-09-18'),
        readTime: 6,
        tags: ['mental health', 'stress', 'wellness']
      },
      {
        id: '4',
        title: 'Sleep Optimization for Better Health',
        excerpt: 'Learn how to improve your sleep quality and why it\'s crucial for overall health and wellness.',
        content: '',
        author: 'Dr. Robert Miller',
        category: 'wellness',
        imageUrl: '/images/sleep-health.jpg',
        publishedAt: new Date('2024-09-15'),
        readTime: 7,
        tags: ['sleep', 'wellness', 'health optimization']
      },
      {
        id: '5',
        title: 'Hydration: The Foundation of Health',
        excerpt: 'Understanding the importance of proper hydration and how it affects every aspect of your health.',
        content: '',
        author: 'Lisa Anderson',
        category: 'wellness',
        imageUrl: '/images/hydration.jpg',
        publishedAt: new Date('2024-09-12'),
        readTime: 4,
        tags: ['hydration', 'water', 'health basics']
      },
      {
        id: '6',
        title: 'Building Mental Resilience',
        excerpt: 'Develop the psychological strength to bounce back from challenges and thrive in difficult situations.',
        content: '',
        author: 'Dr. Michael Davis',
        category: 'mental-health',
        imageUrl: '/images/mental-resilience.jpg',
        publishedAt: new Date('2024-09-10'),
        readTime: 9,
        tags: ['mental health', 'resilience', 'psychology']
      }
    ];
  }
}