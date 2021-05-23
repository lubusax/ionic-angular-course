import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place('p1',
    'One Forty West - Frankfurt am Main',
    'Auf der Senckenberganlage wird der 145 Meter hohe „One Forty West“ errichtet. Während in die unteren 23 Geschosse ein Viersternehotel einziehen wird, sind die restlichen der 41 Obergeschosse für Wohnungen vorgesehen. Diese wollen mit hochwertiger Ausstattung, Concierge-Service rund um die Uhr und Extras wie ein Hundewaschplatz überzeugen. Günstig werden die Wohnungen nicht sein, der Quadratmeterpreis beginnt bei 13.000 Euro.',
    'https://www.engelvoelkers.com/images/bc97077b-10f2-46d7-9cd3-78fb23a6e5c1/enjoying-the-high-life-in-a-high-rise',
    1745000),
    new Place('p2',
    'FOUR - Frankfurt am Main',
    'Gleich vier Hochhäuser entstehen auf dem einstigen Areal der Deutschen Bank im Zentrum von Frankfurt. Ein lebendiges Quartier soll hier errichtet werden, in den Häusern sollen nicht nur Büros entstehen, sondern auch über 600 Wohnungen, ein Hotel, eine Kindertagesstätte sowie Gastronomie und Geschäfte. Ein öffentlicher Garten in 25 Meter Höhe auf dem Sockel der Gebäude soll künftig Menschen zu einer Auszeit im Grünen einladen. Der höchste Turm des Ensembles wird 228 Meter in die Höhe ragen und vor allem Büros beherbergen. Er wird damit zu den höchsten Bürogebäuden in Deutschland gehören. Die zwei Wohntürme werden jeweils 173 und 120 Meter hoch werden und etwa 600 Wohnungen bieten. Der kleinste Turm wird immerhin 100 Meter hoch und ebenfalls Büros beherbergen. Baubeginn war 2018, die Fertigstellung ist für 2023 geplant.',
    'https://www.4frankfurt.de/assets/img/pages/living/gallery/img-living-slider-4--1366.jpg',
    1845000),
    new Place('p3',
    'EDEN - Frankfurt am Main',
    'One of the city\'s most spectacular, modern residential towers is growing in the middle of the up-and-coming Europaviertel. The spacious 2-bedroom apartment on the 17th floor opens a fantastic view over the roofs of the Europaviertel to the Taunus. Floor-deep panorama windows create a light-flooded feeling of space. On 63 square metres, a high-quality and elegant living culture of the extra class unfolds. The surrounding terrace is the ideal retreat in the dynamic city life the green, vertical garden pays homage to peace and relaxation.',
    'https://www.neubaukompass.de/bilder/objekt/17671/196416-gross.jpg',
    772500)     
  ]; 

  get places() {
    return [...this._places];
  }

  constructor() { }

  getPlace(id: string) {
    return {...this._places.find( p => p.id === id)};
  }
}
