const parseType = (unknown) => {
    if (['home', 'personal', 'work'].includes(unknown)) return unknown;
  };
  
  const parseBoolean = (unknown) => {
    if (!['true', 'false'].includes(unknown)) return;
  
    return unknown === 'true' ? true : false;
  };
  
  const parseSortOrder = (value) => {
    return value === 'asc' || value === 'desc' ? value : 'asc';
  };
  
  const parseSortBy = (value) => {
    return ['name', 'otherProperty'].includes(value) ? value : 'name';
  };
  
  export const parseFilters = (query) => {
    return {
      sortBy: parseSortBy(query.sortBy),
      sortOrder: parseSortOrder(query.sortOrder),
      contactType: parseType(query.contactType),
      isFavourite: parseBoolean(query.isFavourite),
    };
  };