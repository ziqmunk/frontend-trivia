import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './summary.html',
  styleUrl: './summary.css',
})
export class Summary implements OnInit {
  score: number = 0;
  total: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Read parameters passed in through the URL route string
    this.route.queryParams.subscribe(params => {
      this.score = +params['score'] || 0;
      this.total = +params['total'] || 0;
    });
  }
}