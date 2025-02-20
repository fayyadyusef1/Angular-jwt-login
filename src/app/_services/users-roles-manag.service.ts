import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserDataService } from './UserDataService.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { baseUrl } from '../_environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse, GenericApiResponse } from 'src/Models/apiResponse';
import { timeout } from 'rxjs/operators';
import { TokenService } from 'src/app/_services/token.service';
import { AuthStateService } from 'src/app/_services/auth-state.service';
import { Permission } from 'src/Models/permission';
import { User } from 'src/Models/User';
@Injectable({
  providedIn: 'root'
})
export class UsersRolesManagService {

  constructor(private http: HttpClient,
    private userDataService: UserDataService,
    private router: Router,
    public tokenService: TokenService,
    private authState: AuthStateService) {
    this.userDataService = userDataService; // Initialize the property in the constructor
  }
  private getHeaders(): HttpHeaders {
    const token = this.tokenService.getToken();
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }


  getUsers(): Observable<GenericApiResponse<User[]>> {
    const apiUrl = `${baseUrl}/project-users`;
    const body = {};
    return this.http.post<GenericApiResponse<User[]>>(apiUrl, body, { headers: this.getHeaders() });
  }


  getSuppliers(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/project-external_users`;
    const body = {};

    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }
  getSuppliersForRfq(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/external_users/items_suppliers`;
    const body = {};

    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }
  updateUserStatus(userId: number, status: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/project-users/${userId}/status`;
    const body = { status: status };

    return this.http.put<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  getRoles(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/roles`;
    const body = {};
    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }
  getRolesForAssignment(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/roles/roles_with_status`;
    const body = {};
    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  getPermissions(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/permissions`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getDeliveryPlaces(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/2/items`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getCancelReasons(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/4/items`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getExtendReasons(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/5/items`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getDeliveryPlacesForRfq(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/2/items/rfq`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getPaymentTerms(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/1/items`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getPaymentTermsForRfq(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/1/items/rfq`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getEditRfqReasons(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/3/items/rfq`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }
  getCategories(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/categories`;
    return this.http.post<ApiResponse>(apiUrl, { headers: this.getHeaders() });
  }

  updateRoleStatus(roleId: number, status: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/roles/${roleId}/status`;
    const body = { status: status };

    return this.http.put<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  updateUserRole(userId: number, roleId: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/roles/users/${userId}/assign_role`;
    const body = { role_id: roleId };

    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  getRolePermissions(roleId: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/roles/${roleId}/permissions`;
    const body = {};
    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }
  addRole(roleName: string, permissions: Permission[], roleId?: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/roles/create`;
    const token = this.tokenService.getToken();
    const body = { roleName: roleName, permissions: permissions };
    let requestUrl = apiUrl;
    let httpMethod = 'POST'; // Default to POST

    if (roleId) {
      requestUrl += `/${roleId}`;
      httpMethod = 'POST';  
    }
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post<ApiResponse>(apiUrl, body, { headers });

  }
  EditRole(roleId: string, role_name: string, permissions: Permission[]): Observable<ApiResponse> {

    const apiUrl = `${baseUrl}/roles/${roleId}/`;
    const body = { roleName: role_name, permissions: permissions };

    console.log("body", body)

    return this.http.put<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }




  getLists(): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/`;
    const body = {};

    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }
  getListItems(listId: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/${listId}/items`;
    const body = {};

    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  updateItemStatus(listId: string, itemId: string, status: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/${listId}/edit-status/${itemId}`;
    const body = { status: status };

    return this.http.put<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  updateSupplierConfig(status: { id: string, status: string }[]): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/external_users/config`;
    const body = { status: status };

    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  updateItem(listId: string, itemId: string, enItemName: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/${listId}/edit-Item/${itemId}`;
    const body = { en_list_item_name: enItemName };

    return this.http.put<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }

  addItem(listId: string, enItemName: string): Observable<ApiResponse> {
    const apiUrl = `${baseUrl}/lists/${listId}/add-item`;
    const body = { en_list_item_name: enItemName };

    return this.http.post<ApiResponse>(apiUrl, body, { headers: this.getHeaders() });
  }
}
