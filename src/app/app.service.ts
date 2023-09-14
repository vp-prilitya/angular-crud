import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { delay, map, observable, Observable } from 'rxjs';
import { Posts } from './models/posts';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  data: Posts[] = [];

  constructor(private httpClient: HttpClient) {}

  getData(): Observable<Posts[]> {
    return this.httpClient
      .get<Posts[]>(environment.url + 'posts')
      .pipe(delay(1000));
  }

  getPost(): Observable<Posts[]> {
    const result = new Observable<Posts[]>((observable) => {
      this.getData().subscribe({
        next: (value) => {
          if (this.data.length == 0) {
            this.data = value;
          }
          observable.next(this.data);
          observable.complete();
        },
        error: (error) => {
          observable.error(error);
        },
      });
    });

    return result;
  }

  gePostByID(id: number): Observable<Posts> {
    return this.httpClient.get<Posts>(environment.url + 'posts/' + id);
  }

  createPost(data: any): Observable<any> {
    const result = new Observable<any>((observable) => {
      this.httpClient.post<Posts>(environment.url + 'posts/', data).subscribe({
        next: (value) => {
          this.data.push(value);
          observable.next('Data Created');
          observable.complete();
        },
        error: (error) => {
          observable.error(error);
        },
      });
    });

    return result;
  }

  updatePost(id: number, data: any): Observable<any> {
    return this.httpClient.put<Posts>(environment.url + 'posts/' + id, data);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(environment.url + 'posts/' + id).pipe(
      map((value) => {
        this.data.splice(id, 1);

        return value;
      })
    );
  }
}
