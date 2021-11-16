export class Country {
    public static readonly AT = new Country('AT', 'Österreich');
    public static readonly DE = new Country('DE', 'Deutschland');
    public static readonly CH = new Country('CH', 'Schweiz');
  
    private constructor(public readonly alpha2: string, public readonly displayName: string) {
    }
  }