import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { id: number; quotes: string; author: string }[] {
    return [
      {
        id: 1,
        quotes: 'The best time for a new beginning is now.',
        author: 'Unknown',
      },
      {
        id: 2,
        quotes: "Don't put off until tomorrow what you can do today.",
        author: 'Benjamin Franklin',
      },
      {
        id: 3,
        quotes: 'The journey is the destination.',
        author: 'Confucius',
      },
      {
        id: 4,
        quotes: 'In the middle of difficulty lies opportunity.',
        author: 'Albert Einstein',
      },
      {
        id: 5,
        quotes: "Don't dream your life, live your dream.",
        author: 'Unknown',
      },
    ];
  }
}
