import { Component } from '@angular/core';
import gsap from 'gsap';
import { Profile } from 'src/app/shared/models/profile.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  words = ['Buy', 'Sell', 'Rent'];
  currentWord = this.words[0];
  wordIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.animateWords();
    this.intervalId = setInterval(() => this.animateWords(), 3000); // Change words every 3 seconds
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId); // Clear interval on component destroy
  }

  animateWords(): void {
    const wordElement = document.getElementById('word');
    if (wordElement) {
      gsap.to(wordElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          this.wordIndex = (this.wordIndex + 1) % this.words.length;
          this.currentWord = this.words[this.wordIndex];
          gsap.to(wordElement, { opacity: 0.5, duration: 0.3 });
        }
      });
    }
  }

  // Products
  profiles: Profile[] = [
    {
      name: "Kajal Thete",
      description: "Very talented girl",
      age: 25,
      occupation: "Software Engineer",
      imageUrl: "model1.jpeg",
      price: 499
    },
    {
      name: "Priya Sharma",
      description: "Talented artist",
      age: 22,
      occupation: "Graphic Designer",
      imageUrl: "model2.jpeg",
      price: 299
    },
    {
      name: "Anjali Kapoor",
      description: "Creative content writer",
      age: 28,
      occupation: "Content Writer",
      imageUrl: "model3.jpeg",
      price: 299
    },
    {
      name: "Nisha Patel",
      description: "Digital marketing expert",
      age: 29,
      occupation: "Digital Marketer",
      imageUrl: "model4.jpeg",
      price: 299
    },
    {
      name: "Meera Reddy",
      description: "Skilled data analyst",
      age: 27,
      occupation: "Data Analyst",
      imageUrl: "model5.jpeg",
      price: 299
    },
    {
      name: "Sonia Jain",
      description: "Expert UI/UX designer",
      age: 24,
      occupation: "UI/UX Designer",
      imageUrl: "model6.jpeg",
      price: 299
    },
    {
      name: "Rekha Gupta",
      description: "Certified fitness trainer",
      age: 32,
      occupation: "Fitness Trainer",
      imageUrl: "model7.jpeg",
      price: 299
    },
    {
      name: "Pooja Malhotra",
      description: "Professional photographer",
      age: 26,
      occupation: "Photographer",
      imageUrl: "model8.jpeg",
      price: 299
    },
    {
      name: "Ritika Sharma",
      description: "Innovative product manager",
      age: 35,
      occupation: "Product Manager",
      imageUrl: "model9.jpeg",
      price: 299
    },
    {
      name: "Deepika Verma",
      description: "Experienced web developer",
      age: 30,
      occupation: "Web Developer",
      imageUrl: "model10.jpeg",
      price: 299
    }
  ]
}
