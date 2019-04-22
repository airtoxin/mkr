export type SearchParams = {
  keywords: string[];
};

export class KyounoryouriRepository {
  search = async (params: SearchParams): Promise<string[]> => {
    return params.keywords;
  };
}

export const kyounoryouriRepository = new KyounoryouriRepository();
