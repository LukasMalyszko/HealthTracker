import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Habit {
  id: number;
  name: string;
  icon: string;
  completed: boolean;
  category: 'health' | 'fitness' | 'mental' | 'productivity';
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  
  isLoaded = false;
  currentDate = new Date();
  completedCount = 0;
  totalHabits = 0;
  
  habits: Habit[] = [
    { id: 1, name: 'Drink 8 glasses of water', icon: '💧', completed: false, category: 'health' },
    { id: 2, name: 'Exercise for 30 minutes', icon: '🏃‍♂️', completed: false, category: 'fitness' },
    { id: 3, name: 'Eat 5 servings of fruits/vegetables', icon: '🥗', completed: false, category: 'health' },
    { id: 4, name: 'Meditate for 10 minutes', icon: '🧘‍♀️', completed: false, category: 'mental' },
    { id: 5, name: 'Get 8 hours of sleep', icon: '😴', completed: false, category: 'health' },
    { id: 6, name: 'Take vitamins', icon: '💊', completed: false, category: 'health' },
    { id: 7, name: 'Read for 20 minutes', icon: '📚', completed: false, category: 'mental' },
    { id: 8, name: 'Practice gratitude', icon: '🙏', completed: false, category: 'mental' },
    { id: 9, name: 'Stretch/Yoga', icon: '🤸‍♀️', completed: false, category: 'fitness' },
    { id: 10, name: 'Limit screen time', icon: '📱', completed: false, category: 'mental' },
    { id: 11, name: 'Plan tomorrow', icon: '📝', completed: false, category: 'productivity' },
    { id: 12, name: 'Connect with a friend', icon: '👫', completed: false, category: 'mental' }
  ];
  
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded = true;
    }, 100);
    
    this.updateStats();
    this.loadTodayProgress();
  }
  
  toggleHabit(habit: Habit): void {
    habit.completed = !habit.completed;
    this.updateStats();
    this.saveTodayProgress();
  }
  
  updateStats(): void {
    this.completedCount = this.habits.filter(h => h.completed).length;
    this.totalHabits = this.habits.length;
  }
  
  getProgressPercentage(): number {
    return this.totalHabits > 0 ? Math.round((this.completedCount / this.totalHabits) * 100) : 0;
  }
  
  getHabitsByCategory(category: string): Habit[] {
    return this.habits.filter(h => h.category === category);
  }
  
  getCategoryIcon(category: string): string {
    const icons = {
      health: '❤️',
      fitness: '💪',
      mental: '🧠',
      productivity: '⚡'
    };
    return icons[category as keyof typeof icons] || '📋';
  }
  
  resetAllHabits(): void {
    this.habits.forEach(habit => habit.completed = false);
    this.updateStats();
    this.saveTodayProgress();
  }
  
  private saveTodayProgress(): void {
    const today = this.currentDate.toDateString();
    const progress = this.habits.map(h => ({ id: h.id, completed: h.completed }));
    localStorage.setItem(`habits_${today}`, JSON.stringify(progress));
  }
  
  private loadTodayProgress(): void {
    const today = this.currentDate.toDateString();
    const saved = localStorage.getItem(`habits_${today}`);
    
    if (saved) {
      const progress = JSON.parse(saved);
      progress.forEach((p: any) => {
        const habit = this.habits.find(h => h.id === p.id);
        if (habit) {
          habit.completed = p.completed;
        }
      });
      this.updateStats();
    }
  }
  
  trackByHabitId(index: number, habit: Habit): number {
    return habit.id;
  }
}
