import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraphCapital',
})
export class ParagraphCapitalPipe implements PipeTransform {
  transform(value: string): string {
    const formatted = value
      .trim()
      .replace(/ +/, ' ')
      .split('.')
      .filter(Boolean)
      .map((p) => {
        const trimmed = p.trim();
        if (!trimmed.length) {
          return '';
        }

        return (
          trimmed[0].toLocaleUpperCase() + trimmed.slice(1).toLocaleLowerCase()
        );
      })
      .join('. ');

    return formatted.length ? formatted + '.' : '';
  }
}
