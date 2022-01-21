/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/authors": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.authors.id"];
          created_at?: parameters["rowFilter.authors.created_at"];
          name?: parameters["rowFilter.authors.name"];
          twitter_handler?: parameters["rowFilter.authors.twitter_handler"];
          website_url?: parameters["rowFilter.authors.website_url"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["authors"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** authors */
          authors?: definitions["authors"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.authors.id"];
          created_at?: parameters["rowFilter.authors.created_at"];
          name?: parameters["rowFilter.authors.name"];
          twitter_handler?: parameters["rowFilter.authors.twitter_handler"];
          website_url?: parameters["rowFilter.authors.website_url"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.authors.id"];
          created_at?: parameters["rowFilter.authors.created_at"];
          name?: parameters["rowFilter.authors.name"];
          twitter_handler?: parameters["rowFilter.authors.twitter_handler"];
          website_url?: parameters["rowFilter.authors.website_url"];
        };
        body: {
          /** authors */
          authors?: definitions["authors"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/doors": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.doors.id"];
          created_at?: parameters["rowFilter.doors.created_at"];
          title?: parameters["rowFilter.doors.title"];
          description?: parameters["rowFilter.doors.description"];
          opening_date?: parameters["rowFilter.doors.opening_date"];
          author_id?: parameters["rowFilter.doors.author_id"];
          /** The image of the door content */
          image_url?: parameters["rowFilter.doors.image_url"];
          /** The door content url */
          content_url?: parameters["rowFilter.doors.content_url"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["doors"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** doors */
          doors?: definitions["doors"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.doors.id"];
          created_at?: parameters["rowFilter.doors.created_at"];
          title?: parameters["rowFilter.doors.title"];
          description?: parameters["rowFilter.doors.description"];
          opening_date?: parameters["rowFilter.doors.opening_date"];
          author_id?: parameters["rowFilter.doors.author_id"];
          /** The image of the door content */
          image_url?: parameters["rowFilter.doors.image_url"];
          /** The door content url */
          content_url?: parameters["rowFilter.doors.content_url"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.doors.id"];
          created_at?: parameters["rowFilter.doors.created_at"];
          title?: parameters["rowFilter.doors.title"];
          description?: parameters["rowFilter.doors.description"];
          opening_date?: parameters["rowFilter.doors.opening_date"];
          author_id?: parameters["rowFilter.doors.author_id"];
          /** The image of the door content */
          image_url?: parameters["rowFilter.doors.image_url"];
          /** The door content url */
          content_url?: parameters["rowFilter.doors.content_url"];
        };
        body: {
          /** doors */
          doors?: definitions["doors"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  /** @description Author the door content */
  authors: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    name: string;
    /** Format: text */
    twitter_handler?: string;
    /** Format: text */
    website_url?: string;
  };
  /** @description These are doors of the advent calendar */
  doors: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    title: string;
    /** Format: text */
    description: string;
    /** Format: date */
    opening_date?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `authors.id`.<fk table='authors' column='id'/>
     */
    author_id: number;
    /**
     * Format: text
     * @description The image of the door content
     */
    image_url?: string;
    /**
     * Format: text
     * @description The door content url
     */
    content_url: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description authors */
  "body.authors": definitions["authors"];
  /** Format: bigint */
  "rowFilter.authors.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.authors.created_at": string;
  /** Format: text */
  "rowFilter.authors.name": string;
  /** Format: text */
  "rowFilter.authors.twitter_handler": string;
  /** Format: text */
  "rowFilter.authors.website_url": string;
  /** @description doors */
  "body.doors": definitions["doors"];
  /** Format: uuid */
  "rowFilter.doors.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.doors.created_at": string;
  /** Format: text */
  "rowFilter.doors.title": string;
  /** Format: text */
  "rowFilter.doors.description": string;
  /** Format: date */
  "rowFilter.doors.opening_date": string;
  /** Format: bigint */
  "rowFilter.doors.author_id": string;
  /**
   * Format: text
   * @description The image of the door content
   */
  "rowFilter.doors.image_url": string;
  /**
   * Format: text
   * @description The door content url
   */
  "rowFilter.doors.content_url": string;
}

export interface operations {}

export interface external {}
