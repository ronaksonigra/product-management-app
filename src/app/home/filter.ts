export class ProductFilters {
  price: PriceFilters = new PriceFilters();
  location: LocationFilters = new LocationFilters();
  availability: boolean = true;
}

class PriceFilters {
  lessThan1000: boolean = false;
  between1001And2000: boolean = false;
  between2001And3000: boolean = false;
  between3001And4000: boolean = false;
  between4001And5000: boolean = false;
  moreThan5000: boolean = false;
}

class LocationFilters {
  ahmedabad: boolean = false;
  chennai: boolean = false;
  delhi: boolean = false;
  mumbai: boolean = false;
}