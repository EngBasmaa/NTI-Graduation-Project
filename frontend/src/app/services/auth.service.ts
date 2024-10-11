import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; // Ensure you import Observable


interface AuthorData {
  userId: string;
  email: string;
  name: string;
}

export interface AuthService {
  isAuthenticated(): Promise<boolean>;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://localhost:5000/author/";

  constructor(private http: HttpClient) { }

  // Register method for FormData (author with image)
  register(formData: FormData) {
    return this.http.post(this.url + 'register', formData);
  }

  login(email: string, password: string) {
    return this.http.post(this.url + 'login', { email, password }); // Update to your actual login endpoint
  }

  // login(email: string, password: string): Observable<{ mytoken: string }> { // Define return type
  //   return this.http.post<{ mytoken: string }>(this.url + 'login', { email, password }); // Ensure correct typing
  // }

  // login(email: string, password: string) {
  //   return this.http.post(this.url + 'login', { email, password }).subscribe((response: any) => {
  //     localStorage.setItem('token', response.token); // Ensure you're storing the token correctly
  //   });
  // }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  //   getAuthorDataFromToken() {
  //     const token = localStorage.getItem('token');
  //     console.log("Retrieved token:", token); // Debug log
  //     if (token) {
  //       try {
  //         const payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/'); // Replace URL-safe characters
  //         const data = JSON.parse(window.atob(payload));
  //         return data;
  //       } catch (error) {
  //         console.error("Failed to decode token:", error);
  //         return null;
  //       }
  //     }
  //     return null;
  //   }

  public getAuthorData(): AuthorData | null {
    return this.getAuthorDataFromToken();
  }

  private getAuthorDataFromToken(): AuthorData | null {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found in localStorage');
      return null;
    }

    try {
      const decodedToken = JSON.parse(atob(token));

      if (
        typeof decodedToken === 'object' &&
        decodedToken !== null &&
        'userId' in decodedToken &&
        'email' in decodedToken &&
        'name' in decodedToken
      ) {
        return {
          userId: decodedToken.userId,
          email: decodedToken.email,
          name: decodedToken.name
        };
      } else {
        console.warn('Decoded token does not match expected format');
        return null;
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`Failed to decode token: ${error.message}`);
      } else {
        console.error('An unknown error occurred while decoding the token');
      }
      console.log('Stored token:', token);
      localStorage.removeItem('token');
      return null;
    }
  }
}