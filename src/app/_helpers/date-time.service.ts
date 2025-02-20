import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  public formatTime(time: number): string {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date(time * 1000));
  }

}


export function formatTime(time: number): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date(time * 1000));



}

export function dateFormatter(params: any): string {
  if (params.value === 'N/A' || !params.value) {
    return params.value; // Return "N/A" as is
  }
  const date = new Date(params.value);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  return formattedDate;
}
export function FilterdateFormatter(params: any): string {
  if (params.value === 'N/A' || !params.value) {
    return params.value; // Return "N/A" as is
  }

  const date = new Date(params.value);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };
  return date.toLocaleString('en-US', options);
}
