import { Component, OnInit, OnDestroy, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { TRIVIA_DATA, Question } from '../../models/quiz.model';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz implements OnInit, OnDestroy {
  questions: Question[] = TRIVIA_DATA;
  currentIndex = signal(0);
  score = signal(0);
  
  // State variables for tracking responses
  selectedAnswer = signal<string | null>(null);
  isAnswered = signal(false);
  
  // Timer settings
  timeLeft = signal(10);
  timerInterval: ReturnType<typeof setInterval> | null = null;
  advanceTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startTimer();
  }

  currentQuestion = computed(() => this.questions[this.currentIndex()]);

  progressPercentage = computed(() => ((this.currentIndex() + 1) / this.questions.length) * 100);

  startTimer() {
    this.timeLeft.set(10);
    this.clearTimer();
    this.timerInterval = setInterval(() => {
      if (this.timeLeft() > 0) {
        this.timeLeft.update((current) => current - 1);
      } else {
        // Time ran out! Auto-reveal correct answer without giving points
        this.selectOption(''); 
      }
    }, 1000);
  }

  clearTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  clearAdvanceTimeout() {
    if (this.advanceTimeout) {
      clearTimeout(this.advanceTimeout);
      this.advanceTimeout = null;
    }
  }

  selectOption(option: string) {
    if (this.isAnswered()) return; // Block multiple clicks
    
    this.clearTimer();
    this.clearAdvanceTimeout();
    this.isAnswered.set(true);
    this.selectedAnswer.set(option);

    if (option === this.currentQuestion().correctAnswer) {
      this.score.update((current) => current + 1);
    }

    // Wait 2 seconds so the user can see if they got it right or wrong, then move forward
    this.advanceTimeout = setTimeout(() => {
      this.nextQuestion();
    }, 2000);
  }

  nextQuestion() {
    this.clearAdvanceTimeout();
    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update((current) => current + 1);
      this.isAnswered.set(false);
      this.selectedAnswer.set(null);
      this.startTimer();
    } else {
      // Finished! Route to summary and pass the score via queryParams
      this.router.navigate(['/summary'], { queryParams: { score: this.score(), total: this.questions.length } });
    }
  }

  ngOnDestroy(): void {
    this.clearTimer();
    this.clearAdvanceTimeout();
  }
}