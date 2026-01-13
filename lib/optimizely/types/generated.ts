import { DocumentNode, ExecutionResult } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type ArticleGroupPage = IData & _IContent & _IPage & {
  __typename?: 'ArticleGroupPage';
  LandingPageSeoSettings: Maybe<PageSeoSettingsProperty>;
  MainContent: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  articleGroupIntro: Maybe<RichText>;
  articleGroupTitle: Maybe<Scalars['String']['output']>;
};


export type ArticleGroupPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticleGroupPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticleGroupPageAutocomplete = {
  __typename?: 'ArticleGroupPageAutocomplete';
  MainContent: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
  articleGroupIntro: Maybe<RichTextAutocomplete>;
  articleGroupTitle: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ArticleGroupPageAutocompleteArticleGroupTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ArticleGroupPageFacet = {
  __typename?: 'ArticleGroupPageFacet';
  LandingPageSeoSettings: Maybe<Array<Maybe<StringFacet>>>;
  MainContent: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
  articleGroupIntro: Maybe<RichTextFacet>;
  articleGroupTitle: Maybe<Array<Maybe<StringFacet>>>;
};


export type ArticleGroupPageFacetLandingPageSeoSettingsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ArticleGroupPageFacetArticleGroupTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticleGroupPageOrderByInput = {
  LandingPageSeoSettings: InputMaybe<OrderBy>;
  MainContent: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  articleGroupIntro: InputMaybe<RichTextOrderByInput>;
  articleGroupTitle: InputMaybe<OrderBy>;
};

export type ArticleGroupPageOutput = {
  __typename?: 'ArticleGroupPageOutput';
  autocomplete: Maybe<ArticleGroupPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticleGroupPageFacet>;
  item: Maybe<ArticleGroupPage>;
  items: Maybe<Array<Maybe<ArticleGroupPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticleGroupPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleGroupPageWhereInput = {
  LandingPageSeoSettings: InputMaybe<StringFilterInput>;
  MainContent: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticleGroupPageWhereInput>>>;
  articleGroupIntro: InputMaybe<RichTextWhereInput>;
  articleGroupTitle: InputMaybe<StringFilterInput>;
};

export type ArticleListElement = IData & _IComponent & _IContent & {
  __typename?: 'ArticleListElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  articleListCount: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticleListElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticleListElementAutocomplete = {
  __typename?: 'ArticleListElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ArticleListElementFacet = {
  __typename?: 'ArticleListElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ArticleListElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ArticleListElementOutput = {
  __typename?: 'ArticleListElementOutput';
  autocomplete: Maybe<ArticleListElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticleListElementFacet>;
  item: Maybe<ArticleListElement>;
  items: Maybe<Array<Maybe<ArticleListElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticleListElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticleListElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticleListElementWhereInput>>>;
};

export type ArticlePage = IData & _IContent & _IPage & {
  __typename?: 'ArticlePage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  articleAuthors: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  articleBody: Maybe<RichText>;
  articleHeroImage: Maybe<ContentReference>;
  articleSeoSettings: Maybe<PageSeoSettingsProperty>;
  articleSummary: Maybe<RichText>;
  articleTitle: Maybe<Scalars['String']['output']>;
};


export type ArticlePage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ArticlePage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  articleBody: Maybe<RichTextAutocomplete>;
  articleHeroImage: Maybe<ContentReferenceAutocomplete>;
  articleSummary: Maybe<RichTextAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  articleBody: Maybe<RichTextFacet>;
  articleHeroImage: Maybe<ContentReferenceFacet>;
  articleSeoSettings: Maybe<Array<Maybe<StringFacet>>>;
  articleSummary: Maybe<RichTextFacet>;
};


export type ArticlePageFacetArticleSeoSettingsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ArticlePageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  articleBody: InputMaybe<RichTextOrderByInput>;
  articleHeroImage: InputMaybe<ContentReferenceOrderByInput>;
  articleSeoSettings: InputMaybe<OrderBy>;
  articleSummary: InputMaybe<RichTextOrderByInput>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete: Maybe<ArticlePageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ArticlePageFacet>;
  item: Maybe<ArticlePage>;
  items: Maybe<Array<Maybe<ArticlePage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  articleBody: InputMaybe<RichTextWhereInput>;
  articleHeroImage: InputMaybe<ContentReferenceWhereInput>;
  articleSeoSettings: InputMaybe<StringFilterInput>;
  articleSummary: InputMaybe<RichTextWhereInput>;
};

export type AvailabilityBlock = IData & _IComponent & _IContent & {
  __typename?: 'AvailabilityBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  availability: Maybe<Scalars['String']['output']>;
  projectTypes: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type AvailabilityBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type AvailabilityBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type AvailabilityBlockAutocomplete = {
  __typename?: 'AvailabilityBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type AvailabilityBlockFacet = {
  __typename?: 'AvailabilityBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type AvailabilityBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type AvailabilityBlockOutput = {
  __typename?: 'AvailabilityBlockOutput';
  autocomplete: Maybe<AvailabilityBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<AvailabilityBlockFacet>;
  item: Maybe<AvailabilityBlock>;
  items: Maybe<Array<Maybe<AvailabilityBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type AvailabilityBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type AvailabilityBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<AvailabilityBlockWhereInput>>>;
};

export type BannerBlock = IData & _IComponent & _IContent & {
  __typename?: 'BannerBlock';
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type BannerBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BannerBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BannerBlockAutocomplete = {
  __typename?: 'BannerBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type BannerBlockFacet = {
  __typename?: 'BannerBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type BannerBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BannerBlockOutput = {
  __typename?: 'BannerBlockOutput';
  autocomplete: Maybe<BannerBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BannerBlockFacet>;
  item: Maybe<BannerBlock>;
  items: Maybe<Array<Maybe<BannerBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BannerBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BannerBlockWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  SeoSettings: Maybe<PageSeoSettingsProperty>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  SeoSettings: Maybe<Array<Maybe<StringFacet>>>;
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};


export type BlankExperienceFacetSeoSettingsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type BlankExperienceOrderByInput = {
  SeoSettings: InputMaybe<OrderBy>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete: Maybe<BlankExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankExperienceFacet>;
  item: Maybe<BlankExperience>;
  items: Maybe<Array<Maybe<BlankExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  SeoSettings: InputMaybe<StringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete: Maybe<BlankSectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlankSectionFacet>;
  item: Maybe<BlankSection>;
  items: Maybe<Array<Maybe<BlankSection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlockImage = IData & _IComponent & _IContent & {
  __typename?: 'BlockImage';
  Image: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type BlockImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type BlockImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type BlockImageAutocomplete = {
  __typename?: 'BlockImageAutocomplete';
  Image: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type BlockImageFacet = {
  __typename?: 'BlockImageFacet';
  Image: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type BlockImageOrderByInput = {
  Image: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type BlockImageOutput = {
  __typename?: 'BlockImageOutput';
  autocomplete: Maybe<BlockImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<BlockImageFacet>;
  item: Maybe<BlockImage>;
  items: Maybe<Array<Maybe<BlockImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type BlockImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlockImageProperty = {
  __typename?: 'BlockImageProperty';
  Image: Maybe<RichText>;
};

export type BlockImagePropertyAutocomplete = {
  __typename?: 'BlockImagePropertyAutocomplete';
  Image: Maybe<RichTextAutocomplete>;
};

export type BlockImagePropertyFacet = {
  __typename?: 'BlockImagePropertyFacet';
  Image: Maybe<RichTextFacet>;
};

export type BlockImagePropertyOrderByInput = {
  Image: InputMaybe<RichTextOrderByInput>;
};

export type BlockImagePropertyWhereInput = {
  Image: InputMaybe<RichTextWhereInput>;
};

export type BlockImageWhereInput = {
  Image: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<BlockImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<BlockImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<BlockImageWhereInput>>>;
};

export type ButtonBlock = IData & _IComponent & _IContent & {
  __typename?: 'ButtonBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  buttonType: Maybe<Scalars['String']['output']>;
  className: Maybe<Scalars['String']['output']>;
  link: Maybe<ContentUrl>;
  text: Maybe<Scalars['String']['output']>;
  variant: Maybe<Scalars['String']['output']>;
};


export type ButtonBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ButtonBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ButtonBlockAutocomplete = {
  __typename?: 'ButtonBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  link: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockFacet = {
  __typename?: 'ButtonBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  link: Maybe<ContentUrlFacet>;
};

export type ButtonBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  link: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockOutput = {
  __typename?: 'ButtonBlockOutput';
  autocomplete: Maybe<ButtonBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ButtonBlockFacet>;
  item: Maybe<ButtonBlock>;
  items: Maybe<Array<Maybe<ButtonBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ButtonBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ButtonBlockProperty = {
  __typename?: 'ButtonBlockProperty';
  buttonType: Maybe<Scalars['String']['output']>;
  className: Maybe<Scalars['String']['output']>;
  link: Maybe<ContentUrl>;
  text: Maybe<Scalars['String']['output']>;
  variant: Maybe<Scalars['String']['output']>;
};

export type ButtonBlockPropertyAutocomplete = {
  __typename?: 'ButtonBlockPropertyAutocomplete';
  link: Maybe<ContentUrlAutocomplete>;
};

export type ButtonBlockPropertyFacet = {
  __typename?: 'ButtonBlockPropertyFacet';
  link: Maybe<ContentUrlFacet>;
};

export type ButtonBlockPropertyOrderByInput = {
  link: InputMaybe<ContentUrlOrderByInput>;
};

export type ButtonBlockPropertyWhereInput = {
  link: InputMaybe<ContentUrlWhereInput>;
};

export type ButtonBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ButtonBlockWhereInput>>>;
  link: InputMaybe<ContentUrlWhereInput>;
};

export type CmsPage = IData & _IContent & _IPage & {
  __typename?: 'CMSPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type CmsPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CmsPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CmsPageAutocomplete = {
  __typename?: 'CMSPageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type CmsPageFacet = {
  __typename?: 'CMSPageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type CmsPageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type CmsPageOutput = {
  __typename?: 'CMSPageOutput';
  autocomplete: Maybe<CmsPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CmsPageFacet>;
  item: Maybe<CmsPage>;
  items: Maybe<Array<Maybe<CmsPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CmsPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CmsPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CmsPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type CtaElement = IData & _IComponent & _IContent & {
  __typename?: 'CTAElement';
  Link: Maybe<ContentUrl>;
  Text: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CtaElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CtaElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CtaElementAutocomplete = {
  __typename?: 'CTAElementAutocomplete';
  Link: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CtaElementFacet = {
  __typename?: 'CTAElementFacet';
  Link: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CtaElementOrderByInput = {
  Link: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CtaElementOutput = {
  __typename?: 'CTAElementOutput';
  autocomplete: Maybe<CtaElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CtaElementFacet>;
  item: Maybe<CtaElement>;
  items: Maybe<Array<Maybe<CtaElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CtaElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaElementWhereInput = {
  Link: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CtaElementWhereInput>>>;
};

export type CtaSectionBlock = IData & _IComponent & _IContent & {
  __typename?: 'CTASectionBlock';
  BackgroundImage: Maybe<ContentUrl>;
  Description: Maybe<RichText>;
  Heading: Maybe<Scalars['String']['output']>;
  PrimaryButtonLink: Maybe<Link>;
  PrimaryButtonText: Maybe<Scalars['String']['output']>;
  SecondaryButtonLink: Maybe<Link>;
  SecondaryButtonText: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CtaSectionBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CtaSectionBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CtaSectionBlockAutocomplete = {
  __typename?: 'CTASectionBlockAutocomplete';
  BackgroundImage: Maybe<ContentUrlAutocomplete>;
  Description: Maybe<RichTextAutocomplete>;
  PrimaryButtonLink: Maybe<LinkAutocomplete>;
  SecondaryButtonLink: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CtaSectionBlockFacet = {
  __typename?: 'CTASectionBlockFacet';
  BackgroundImage: Maybe<ContentUrlFacet>;
  Description: Maybe<RichTextFacet>;
  PrimaryButtonLink: Maybe<LinkFacet>;
  SecondaryButtonLink: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CtaSectionBlockOrderByInput = {
  BackgroundImage: InputMaybe<ContentUrlOrderByInput>;
  Description: InputMaybe<RichTextOrderByInput>;
  PrimaryButtonLink: InputMaybe<LinkOrderByInput>;
  SecondaryButtonLink: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CtaSectionBlockOutput = {
  __typename?: 'CTASectionBlockOutput';
  autocomplete: Maybe<CtaSectionBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CtaSectionBlockFacet>;
  item: Maybe<CtaSectionBlock>;
  items: Maybe<Array<Maybe<CtaSectionBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CtaSectionBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CtaSectionBlockWhereInput = {
  BackgroundImage: InputMaybe<ContentUrlWhereInput>;
  Description: InputMaybe<RichTextWhereInput>;
  PrimaryButtonLink: InputMaybe<LinkWhereInput>;
  SecondaryButtonLink: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CtaSectionBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CtaSectionBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CtaSectionBlockWhereInput>>>;
};

export type CardBlock = IData & _IComponent & _IContent & {
  __typename?: 'CardBlock';
  CardButton: Maybe<ButtonBlockProperty>;
  CardColor: Maybe<Scalars['String']['output']>;
  CardDescription: Maybe<RichText>;
  CardHeading: Maybe<Scalars['String']['output']>;
  CardIcon: Maybe<ContentReference>;
  CardImage: Maybe<ContentReference>;
  CardImageLayout: Maybe<Scalars['String']['output']>;
  CardSubheading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type CardBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type CardBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type CardBlockAutocomplete = {
  __typename?: 'CardBlockAutocomplete';
  CardButton: Maybe<ButtonBlockPropertyAutocomplete>;
  CardDescription: Maybe<RichTextAutocomplete>;
  CardIcon: Maybe<ContentReferenceAutocomplete>;
  CardImage: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type CardBlockFacet = {
  __typename?: 'CardBlockFacet';
  CardButton: Maybe<ButtonBlockPropertyFacet>;
  CardDescription: Maybe<RichTextFacet>;
  CardIcon: Maybe<ContentReferenceFacet>;
  CardImage: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type CardBlockOrderByInput = {
  CardButton: InputMaybe<ButtonBlockPropertyOrderByInput>;
  CardDescription: InputMaybe<RichTextOrderByInput>;
  CardIcon: InputMaybe<ContentReferenceOrderByInput>;
  CardImage: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type CardBlockOutput = {
  __typename?: 'CardBlockOutput';
  autocomplete: Maybe<CardBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<CardBlockFacet>;
  item: Maybe<CardBlock>;
  items: Maybe<Array<Maybe<CardBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type CardBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type CardBlockWhereInput = {
  CardButton: InputMaybe<ButtonBlockPropertyWhereInput>;
  CardDescription: InputMaybe<RichTextWhereInput>;
  CardIcon: InputMaybe<ContentReferenceWhereInput>;
  CardImage: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<CardBlockWhereInput>>>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key: Maybe<Scalars['String']['output']>;
  value: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  value: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key: InputMaybe<OrderBy>;
  value: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key: InputMaybe<StringFilterInput>;
  value: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes: Maybe<ICompositionNodeAutocomplete>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  nodes: Maybe<ICompositionNodeFacet>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  nodes: InputMaybe<ICompositionNodeOrderByInput>;
  type: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  nodes: InputMaybe<ICompositionNodeWhereInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ContactBlock = IData & _IComponent & _IContent & {
  __typename?: 'ContactBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ContactBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ContactBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ContactBlockAutocomplete = {
  __typename?: 'ContactBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ContactBlockFacet = {
  __typename?: 'ContactBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ContactBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ContactBlockOutput = {
  __typename?: 'ContactBlockOutput';
  autocomplete: Maybe<ContactBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ContactBlockFacet>;
  item: Maybe<ContactBlock>;
  items: Maybe<Array<Maybe<ContactBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ContactBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContactBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ContactBlockWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base: Maybe<Scalars['String']['output']>;
  default: Maybe<Scalars['String']['output']>;
  graph: Maybe<Scalars['String']['output']>;
  hierarchical: Maybe<Scalars['String']['output']>;
  internal: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base: Maybe<Array<Maybe<StringFacet>>>;
  default: Maybe<Array<Maybe<StringFacet>>>;
  graph: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical: Maybe<Array<Maybe<StringFacet>>>;
  internal: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base: InputMaybe<OrderBy>;
  default: InputMaybe<OrderBy>;
  graph: InputMaybe<OrderBy>;
  hierarchical: InputMaybe<OrderBy>;
  internal: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base: InputMaybe<StringFilterInput>;
  default: InputMaybe<StringFilterInput>;
  graph: InputMaybe<StringFilterInput>;
  hierarchical: InputMaybe<StringFilterInput>;
  internal: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Data_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor: Maybe<Scalars['String']['output']>;
  item: Maybe<IData>;
  items: Maybe<Array<Maybe<IData>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export enum DateFacetUnit {
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  Day = 'DAY',
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  Hour = 'HOUR',
  /** Defined as 1000 milliseconds each. */
  Minute = 'MINUTE'
}

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin: InputMaybe<Scalars['Date']['input']>;
  rate: InputMaybe<Scalars['Float']['input']>;
  scale: InputMaybe<Scalars['Int']['input']>;
};

export type DefaultImage = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'DefaultImage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type DefaultImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type DefaultImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DefaultImageAutocomplete = {
  __typename?: 'DefaultImageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultImageFacet = {
  __typename?: 'DefaultImageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type DefaultImageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DefaultImageOutput = {
  __typename?: 'DefaultImageOutput';
  autocomplete: Maybe<DefaultImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<DefaultImageFacet>;
  item: Maybe<DefaultImage>;
  items: Maybe<Array<Maybe<DefaultImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DefaultImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DefaultImageWhereInput>>>;
};

export type DefaultVideo = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'DefaultVideo';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type DefaultVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type DefaultVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DefaultVideoAutocomplete = {
  __typename?: 'DefaultVideoAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type DefaultVideoFacet = {
  __typename?: 'DefaultVideoFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type DefaultVideoOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DefaultVideoOutput = {
  __typename?: 'DefaultVideoOutput';
  autocomplete: Maybe<DefaultVideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<DefaultVideoFacet>;
  item: Maybe<DefaultVideo>;
  items: Maybe<Array<Maybe<DefaultVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DefaultVideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DefaultVideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DefaultVideoWhereInput>>>;
};

export type Dictionary = IData & _IComponent & _IContent & {
  __typename?: 'Dictionary';
  DictionaryItems: Maybe<Array<Maybe<DictionaryItemProperty>>>;
  DictionaryKey: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type DictionaryDictionaryKeyArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Dictionary_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Dictionary_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DictionaryAutocomplete = {
  __typename?: 'DictionaryAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryFacet = {
  __typename?: 'DictionaryFacet';
  DictionaryItems: Maybe<Array<Maybe<StringFacet>>>;
  DictionaryKey: Maybe<Array<Maybe<StringFacet>>>;
  _metadata: Maybe<IContentMetadataFacet>;
};


export type DictionaryFacetDictionaryItemsArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type DictionaryFacetDictionaryKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type DictionaryItem = IData & _IComponent & _IContent & {
  __typename?: 'DictionaryItem';
  DictionaryItemKey: Maybe<Scalars['String']['output']>;
  DictionaryItemValue: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type DictionaryItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type DictionaryItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type DictionaryItemAutocomplete = {
  __typename?: 'DictionaryItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type DictionaryItemFacet = {
  __typename?: 'DictionaryItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type DictionaryItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DictionaryItemOutput = {
  __typename?: 'DictionaryItemOutput';
  autocomplete: Maybe<DictionaryItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<DictionaryItemFacet>;
  item: Maybe<DictionaryItem>;
  items: Maybe<Array<Maybe<DictionaryItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DictionaryItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryItemProperty = {
  __typename?: 'DictionaryItemProperty';
  DictionaryItemKey: Maybe<Scalars['String']['output']>;
  DictionaryItemValue: Maybe<Scalars['String']['output']>;
};

export type DictionaryItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DictionaryItemWhereInput>>>;
};

export type DictionaryOrderByInput = {
  DictionaryItems: InputMaybe<OrderBy>;
  DictionaryKey: InputMaybe<OrderBy>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type DictionaryOutput = {
  __typename?: 'DictionaryOutput';
  autocomplete: Maybe<DictionaryAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<DictionaryFacet>;
  item: Maybe<Dictionary>;
  items: Maybe<Array<Maybe<Dictionary>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type DictionaryOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type DictionaryWhereInput = {
  DictionaryItems: InputMaybe<StringFilterInput>;
  DictionaryKey: InputMaybe<SearchableStringFilterInput>;
  _and: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<DictionaryWhereInput>>>;
};

export type Footer = IData & _IContent & _IPage & {
  __typename?: 'Footer';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  columns: Maybe<Array<Maybe<_IContent>>>;
  copyrightText: Maybe<Scalars['String']['output']>;
  socialLinks: Maybe<Array<Maybe<_IContent>>>;
};


export type Footer_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Footer_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterAutocomplete = {
  __typename?: 'FooterAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  columns: Maybe<_IContentAutocomplete>;
  socialLinks: Maybe<_IContentAutocomplete>;
};

export type FooterColumn = IData & _IComponent & _IContent & {
  __typename?: 'FooterColumn';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  links: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type FooterColumn_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type FooterColumn_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type FooterColumnAutocomplete = {
  __typename?: 'FooterColumnAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  links: Maybe<_IContentAutocomplete>;
};

export type FooterColumnFacet = {
  __typename?: 'FooterColumnFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  links: Maybe<_IContentFacet>;
};

export type FooterColumnOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  links: InputMaybe<_IContentOrderByInput>;
};

export type FooterColumnOutput = {
  __typename?: 'FooterColumnOutput';
  autocomplete: Maybe<FooterColumnAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterColumnFacet>;
  item: Maybe<FooterColumn>;
  items: Maybe<Array<Maybe<FooterColumn>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterColumnOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterColumnWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterColumnWhereInput>>>;
  links: InputMaybe<_IContentWhereInput>;
};

export type FooterFacet = {
  __typename?: 'FooterFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  columns: Maybe<_IContentFacet>;
  socialLinks: Maybe<_IContentFacet>;
};

export type FooterOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  columns: InputMaybe<_IContentOrderByInput>;
  socialLinks: InputMaybe<_IContentOrderByInput>;
};

export type FooterOutput = {
  __typename?: 'FooterOutput';
  autocomplete: Maybe<FooterAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<FooterFacet>;
  item: Maybe<Footer>;
  items: Maybe<Array<Maybe<Footer>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type FooterOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type FooterWhereInput = {
  _and: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<FooterWhereInput>>>;
  columns: InputMaybe<_IContentWhereInput>;
  socialLinks: InputMaybe<_IContentWhereInput>;
};

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123 = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia123';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type GenericMedia123_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type GenericMedia123_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type GenericMedia123Autocomplete = {
  __typename?: 'GenericMedia123Autocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMedia123Facet = {
  __typename?: 'GenericMedia123Facet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMedia123OrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMedia123Output = {
  __typename?: 'GenericMedia123Output';
  autocomplete: Maybe<GenericMedia123Autocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMedia123Facet>;
  item: Maybe<GenericMedia123>;
  items: Maybe<Array<Maybe<GenericMedia123>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMedia123OutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMedia123WhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMedia123WhereInput>>>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete: Maybe<GenericMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<GenericMediaFacet>;
  item: Maybe<GenericMedia>;
  items: Maybe<Array<Maybe<GenericMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type Header = IData & _IContent & _IPage & {
  __typename?: 'Header';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  ctaHref: Maybe<Scalars['String']['output']>;
  ctaText: Maybe<Scalars['String']['output']>;
  logo: Maybe<Scalars['String']['output']>;
  navItems: Maybe<Array<Maybe<_IContent>>>;
};


export type Header_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Header_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderAutocomplete = {
  __typename?: 'HeaderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  navItems: Maybe<_IContentAutocomplete>;
};

export type HeaderBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeaderBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  site_logo: Maybe<ContentReference>;
  site_logo_dark: Maybe<ContentReference>;
  site_main_navigation: Maybe<Array<Maybe<_IContent>>>;
  site_utility_navigation: Maybe<Array<Maybe<_IContent>>>;
};


export type HeaderBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeaderBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeaderBlockAutocomplete = {
  __typename?: 'HeaderBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  site_logo: Maybe<ContentReferenceAutocomplete>;
  site_logo_dark: Maybe<ContentReferenceAutocomplete>;
  site_main_navigation: Maybe<_IContentAutocomplete>;
  site_utility_navigation: Maybe<_IContentAutocomplete>;
};

export type HeaderBlockFacet = {
  __typename?: 'HeaderBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  site_logo: Maybe<ContentReferenceFacet>;
  site_logo_dark: Maybe<ContentReferenceFacet>;
  site_main_navigation: Maybe<_IContentFacet>;
  site_utility_navigation: Maybe<_IContentFacet>;
};

export type HeaderBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  site_logo: InputMaybe<ContentReferenceOrderByInput>;
  site_logo_dark: InputMaybe<ContentReferenceOrderByInput>;
  site_main_navigation: InputMaybe<_IContentOrderByInput>;
  site_utility_navigation: InputMaybe<_IContentOrderByInput>;
};

export type HeaderBlockOutput = {
  __typename?: 'HeaderBlockOutput';
  autocomplete: Maybe<HeaderBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderBlockFacet>;
  item: Maybe<HeaderBlock>;
  items: Maybe<Array<Maybe<HeaderBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderBlockWhereInput>>>;
  site_logo: InputMaybe<ContentReferenceWhereInput>;
  site_logo_dark: InputMaybe<ContentReferenceWhereInput>;
  site_main_navigation: InputMaybe<_IContentWhereInput>;
  site_utility_navigation: InputMaybe<_IContentWhereInput>;
};

export type HeaderFacet = {
  __typename?: 'HeaderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  navItems: Maybe<_IContentFacet>;
};

export type HeaderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  navItems: InputMaybe<_IContentOrderByInput>;
};

export type HeaderOutput = {
  __typename?: 'HeaderOutput';
  autocomplete: Maybe<HeaderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeaderFacet>;
  item: Maybe<Header>;
  items: Maybe<Array<Maybe<Header>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeaderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeaderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeaderWhereInput>>>;
  navItems: InputMaybe<_IContentWhereInput>;
};

export type HeadingElement = IData & _IComponent & _IContent & {
  __typename?: 'HeadingElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  headingText: Maybe<Scalars['String']['output']>;
};


export type HeadingElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeadingElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeadingElementAutocomplete = {
  __typename?: 'HeadingElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeadingElementFacet = {
  __typename?: 'HeadingElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeadingElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeadingElementOutput = {
  __typename?: 'HeadingElementOutput';
  autocomplete: Maybe<HeadingElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeadingElementFacet>;
  item: Maybe<HeadingElement>;
  items: Maybe<Array<Maybe<HeadingElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeadingElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeadingElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeadingElementWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  decorationColorsPrimary: Maybe<Scalars['String']['output']>;
  decorationColorsSecondary: Maybe<Scalars['String']['output']>;
  showDecoration: Maybe<Scalars['Boolean']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete: Maybe<HeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<HeroBlockFacet>;
  item: Maybe<HeroBlock>;
  items: Maybe<Array<Maybe<HeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
  endToken: InputMaybe<Scalars['String']['input']>;
  startToken: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component: Maybe<_IComponent>;
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  nodeType: Maybe<Array<Maybe<StringFacet>>>;
  type: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName: InputMaybe<OrderBy>;
  displaySettings: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  nodeType: InputMaybe<OrderBy>;
  type: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName: InputMaybe<StringFilterInput>;
  displaySettings: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  nodeType: InputMaybe<StringFilterInput>;
  type: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  displayName: Maybe<Scalars['String']['output']>;
  displaySettings: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  nodeType: Maybe<Scalars['String']['output']>;
  nodes: Maybe<Array<Maybe<ICompositionNode>>>;
  type: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
  version: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset: Maybe<Array<Maybe<StringFacet>>>;
  created: Maybe<Array<Maybe<DateFacet>>>;
  displayName: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale: Maybe<Array<Maybe<StringFacet>>>;
  key: Maybe<Array<Maybe<StringFacet>>>;
  lastModified: Maybe<Array<Maybe<DateFacet>>>;
  locale: Maybe<Array<Maybe<StringFacet>>>;
  published: Maybe<Array<Maybe<DateFacet>>>;
  status: Maybe<Array<Maybe<StringFacet>>>;
  types: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
  version: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetStatusArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset: InputMaybe<OrderBy>;
  created: InputMaybe<OrderBy>;
  displayName: InputMaybe<OrderBy>;
  fallbackForLocale: InputMaybe<OrderBy>;
  key: InputMaybe<OrderBy>;
  lastModified: InputMaybe<OrderBy>;
  locale: InputMaybe<OrderBy>;
  published: InputMaybe<OrderBy>;
  status: InputMaybe<OrderBy>;
  types: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
  version: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset: InputMaybe<StringFilterInput>;
  created: InputMaybe<DateFilterInput>;
  displayName: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale: InputMaybe<StringFilterInput>;
  key: InputMaybe<StringFilterInput>;
  lastModified: InputMaybe<DateFilterInput>;
  locale: InputMaybe<StringFilterInput>;
  published: InputMaybe<DateFilterInput>;
  status: InputMaybe<StringFilterInput>;
  types: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
  version: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type IData_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'Image';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageAutocomplete = {
  __typename?: 'ImageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageElement = IData & _IComponent & _IContent & {
  __typename?: 'ImageElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  altText: Maybe<Scalars['String']['output']>;
  imageLink: Maybe<ContentReference>;
};


export type ImageElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageElementAutocomplete = {
  __typename?: 'ImageElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  imageLink: Maybe<ContentReferenceAutocomplete>;
};

export type ImageElementFacet = {
  __typename?: 'ImageElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  imageLink: Maybe<ContentReferenceFacet>;
};

export type ImageElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  imageLink: InputMaybe<ContentReferenceOrderByInput>;
};

export type ImageElementOutput = {
  __typename?: 'ImageElementOutput';
  autocomplete: Maybe<ImageElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageElementFacet>;
  item: Maybe<ImageElement>;
  items: Maybe<Array<Maybe<ImageElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageElementWhereInput>>>;
  imageLink: InputMaybe<ContentReferenceWhereInput>;
};

export type ImageFacet = {
  __typename?: 'ImageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete: Maybe<ImageMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageMediaFacet>;
  item: Maybe<ImageMedia>;
  items: Maybe<Array<Maybe<ImageMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type ImageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ImageOutput = {
  __typename?: 'ImageOutput';
  autocomplete: Maybe<ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ImageFacet>;
  item: Maybe<Image>;
  items: Maybe<Array<Maybe<Image>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ImageWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  displayOption: Maybe<Scalars['String']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  published: Maybe<Scalars['DateTime']['output']>;
  status: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type Link = {
  __typename?: 'Link';
  target: Maybe<Scalars['String']['output']>;
  text: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  url: Maybe<ContentUrl>;
};


export type LinkTextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type LinkAutocomplete = {
  __typename?: 'LinkAutocomplete';
  target: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrlAutocomplete>;
};


export type LinkAutocompleteTargetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type LinkAutocompleteTitleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type LinkConfig = {
  from: InputMaybe<Scalars['String']['input']>;
  to: InputMaybe<Scalars['String']['input']>;
};

export type LinkFacet = {
  __typename?: 'LinkFacet';
  target: Maybe<Array<Maybe<StringFacet>>>;
  text: Maybe<Array<Maybe<StringFacet>>>;
  title: Maybe<Array<Maybe<StringFacet>>>;
  url: Maybe<ContentUrlFacet>;
};


export type LinkFacetTargetArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTextArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LinkFacetTitleArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LinkOrderByInput = {
  target: InputMaybe<OrderBy>;
  text: InputMaybe<OrderBy>;
  title: InputMaybe<OrderBy>;
  url: InputMaybe<ContentUrlOrderByInput>;
};

export enum LinkTypes {
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  Assets = 'ASSETS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Default = 'DEFAULT',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  Items = 'ITEMS',
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  Path = 'PATH'
}

export type LinkWhereInput = {
  target: InputMaybe<StringFilterInput>;
  text: InputMaybe<SearchableStringFilterInput>;
  title: InputMaybe<StringFilterInput>;
  url: InputMaybe<ContentUrlWhereInput>;
};

export enum Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL',
  En = 'en'
}

export type LogoItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'LogoItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  alt: Maybe<Scalars['String']['output']>;
  src: Maybe<Scalars['String']['output']>;
};


export type LogoItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogoItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogoItemBlockAutocomplete = {
  __typename?: 'LogoItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type LogoItemBlockFacet = {
  __typename?: 'LogoItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type LogoItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type LogoItemBlockOutput = {
  __typename?: 'LogoItemBlockOutput';
  autocomplete: Maybe<LogoItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogoItemBlockFacet>;
  item: Maybe<LogoItemBlock>;
  items: Maybe<Array<Maybe<LogoItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogoItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogoItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogoItemBlockWhereInput>>>;
};

export type LogosBlock = IData & _IComponent & _IContent & {
  __typename?: 'LogosBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  logos: Maybe<Array<Maybe<_IContent>>>;
};


export type LogosBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type LogosBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type LogosBlockAutocomplete = {
  __typename?: 'LogosBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  logos: Maybe<_IContentAutocomplete>;
};

export type LogosBlockFacet = {
  __typename?: 'LogosBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  logos: Maybe<_IContentFacet>;
};

export type LogosBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  logos: InputMaybe<_IContentOrderByInput>;
};

export type LogosBlockOutput = {
  __typename?: 'LogosBlockOutput';
  autocomplete: Maybe<LogosBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<LogosBlockFacet>;
  item: Maybe<LogosBlock>;
  items: Maybe<Array<Maybe<LogosBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type LogosBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type LogosBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<LogosBlockWhereInput>>>;
  logos: InputMaybe<_IContentWhereInput>;
};

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset: Maybe<Scalars['String']['output']>;
  container: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  created: Maybe<Scalars['DateTime']['output']>;
  createdBy: Maybe<Scalars['String']['output']>;
  displayName: Maybe<Scalars['String']['output']>;
  expired: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale: Maybe<Scalars['String']['output']>;
  key: Maybe<Scalars['String']['output']>;
  lastModified: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy: Maybe<Scalars['String']['output']>;
  locale: Maybe<Scalars['String']['output']>;
  locales: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType: Maybe<Scalars['String']['output']>;
  owner: Maybe<Scalars['String']['output']>;
  path: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published: Maybe<Scalars['DateTime']['output']>;
  routeSegment: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  thumbnail: Maybe<Scalars['String']['output']>;
  types: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url: Maybe<ContentUrl>;
  version: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight: InputMaybe<HighlightOptions>;
};

export type MegaMenuGroupBlock = IData & _IComponent & _IContent & {
  __typename?: 'MegaMenuGroupBlock';
  MegaMenuContentArea: Maybe<Array<Maybe<_IContent>>>;
  MegaMenuUrl: Maybe<ContentUrl>;
  MenuMenuHeading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type MegaMenuGroupBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type MegaMenuGroupBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type MegaMenuGroupBlockAutocomplete = {
  __typename?: 'MegaMenuGroupBlockAutocomplete';
  MegaMenuContentArea: Maybe<_IContentAutocomplete>;
  MegaMenuUrl: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type MegaMenuGroupBlockFacet = {
  __typename?: 'MegaMenuGroupBlockFacet';
  MegaMenuContentArea: Maybe<_IContentFacet>;
  MegaMenuUrl: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type MegaMenuGroupBlockOrderByInput = {
  MegaMenuContentArea: InputMaybe<_IContentOrderByInput>;
  MegaMenuUrl: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type MegaMenuGroupBlockOutput = {
  __typename?: 'MegaMenuGroupBlockOutput';
  autocomplete: Maybe<MegaMenuGroupBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<MegaMenuGroupBlockFacet>;
  item: Maybe<MegaMenuGroupBlock>;
  items: Maybe<Array<Maybe<MegaMenuGroupBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type MegaMenuGroupBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type MegaMenuGroupBlockWhereInput = {
  MegaMenuContentArea: InputMaybe<_IContentWhereInput>;
  MegaMenuUrl: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<MegaMenuGroupBlockWhereInput>>>;
};

export type NavItem = IData & _IComponent & _IContent & {
  __typename?: 'NavItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  href: Maybe<Scalars['String']['output']>;
  label: Maybe<Scalars['String']['output']>;
};


export type NavItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type NavItemAutocomplete = {
  __typename?: 'NavItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type NavItemFacet = {
  __typename?: 'NavItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type NavItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type NavItemOutput = {
  __typename?: 'NavItemOutput';
  autocomplete: Maybe<NavItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<NavItemFacet>;
  item: Maybe<NavItem>;
  items: Maybe<Array<Maybe<NavItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type NavItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<NavItemWhereInput>>>;
};

export type NavigationMenuBlock = IData & _IComponent & _IContent & {
  __typename?: 'NavigationMenuBlock';
  MenuNavigationHeading: Maybe<Scalars['String']['output']>;
  NavigationLinks: Maybe<Array<Maybe<Link>>>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type NavigationMenuBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type NavigationMenuBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type NavigationMenuBlockAutocomplete = {
  __typename?: 'NavigationMenuBlockAutocomplete';
  NavigationLinks: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type NavigationMenuBlockFacet = {
  __typename?: 'NavigationMenuBlockFacet';
  NavigationLinks: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type NavigationMenuBlockOrderByInput = {
  NavigationLinks: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type NavigationMenuBlockOutput = {
  __typename?: 'NavigationMenuBlockOutput';
  autocomplete: Maybe<NavigationMenuBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<NavigationMenuBlockFacet>;
  item: Maybe<NavigationMenuBlock>;
  items: Maybe<Array<Maybe<NavigationMenuBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type NavigationMenuBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type NavigationMenuBlockProperty = {
  __typename?: 'NavigationMenuBlockProperty';
  MenuNavigationHeading: Maybe<Scalars['String']['output']>;
  NavigationLinks: Maybe<Array<Maybe<Link>>>;
};

export type NavigationMenuBlockPropertyAutocomplete = {
  __typename?: 'NavigationMenuBlockPropertyAutocomplete';
  NavigationLinks: Maybe<LinkAutocomplete>;
};

export type NavigationMenuBlockPropertyFacet = {
  __typename?: 'NavigationMenuBlockPropertyFacet';
  NavigationLinks: Maybe<LinkFacet>;
};

export type NavigationMenuBlockPropertyOrderByInput = {
  NavigationLinks: InputMaybe<LinkOrderByInput>;
};

export type NavigationMenuBlockPropertyWhereInput = {
  NavigationLinks: InputMaybe<LinkWhereInput>;
};

export type NavigationMenuBlockWhereInput = {
  NavigationLinks: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<NavigationMenuBlockWhereInput>>>;
};

export type OfficeLocation = IData & _IComponent & _IContent & {
  __typename?: 'OfficeLocation';
  OfficeAddressCity: Maybe<Scalars['String']['output']>;
  OfficeAddressCountry: Maybe<Scalars['String']['output']>;
  OfficeAddressPostalCode: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet1: Maybe<Scalars['String']['output']>;
  OfficeAddressStreet2: Maybe<Scalars['String']['output']>;
  OfficeEmail: Maybe<Scalars['String']['output']>;
  OfficePhone: Maybe<Scalars['String']['output']>;
  OfficeTitle: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type OfficeLocation_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type OfficeLocation_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type OfficeLocationAutocomplete = {
  __typename?: 'OfficeLocationAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type OfficeLocationFacet = {
  __typename?: 'OfficeLocationFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type OfficeLocationOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type OfficeLocationOutput = {
  __typename?: 'OfficeLocationOutput';
  autocomplete: Maybe<OfficeLocationAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<OfficeLocationFacet>;
  item: Maybe<OfficeLocation>;
  items: Maybe<Array<Maybe<OfficeLocation>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type OfficeLocationOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type OfficeLocationWhereInput = {
  _and: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<OfficeLocationWhereInput>>>;
};

export enum OrderBy {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum OrderByFacetType {
  Count = 'COUNT',
  Value = 'VALUE'
}

export type Page = IData & _IContent & _IPage & {
  __typename?: 'Page';
  Blocks: Maybe<Array<Maybe<_IContent>>>;
  Body: Maybe<Scalars['String']['output']>;
  Image: Maybe<Array<Maybe<_IContent>>>;
  ImageBlock: Maybe<BlockImageProperty>;
  SSImage: Maybe<Array<Maybe<_IContent>>>;
  SubTitle: Maybe<Scalars['String']['output']>;
  Title: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PageAutocomplete = {
  __typename?: 'PageAutocomplete';
  Blocks: Maybe<_IContentAutocomplete>;
  Image: Maybe<_IContentAutocomplete>;
  ImageBlock: Maybe<BlockImagePropertyAutocomplete>;
  SSImage: Maybe<_IContentAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PageFacet = {
  __typename?: 'PageFacet';
  Blocks: Maybe<_IContentFacet>;
  Image: Maybe<_IContentFacet>;
  ImageBlock: Maybe<BlockImagePropertyFacet>;
  SSImage: Maybe<_IContentFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PageOrderByInput = {
  Blocks: InputMaybe<_IContentOrderByInput>;
  Image: InputMaybe<_IContentOrderByInput>;
  ImageBlock: InputMaybe<BlockImagePropertyOrderByInput>;
  SSImage: InputMaybe<_IContentOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PageOutput = {
  __typename?: 'PageOutput';
  autocomplete: Maybe<PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PageFacet>;
  item: Maybe<Page>;
  items: Maybe<Array<Maybe<Page>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettings = IData & _IComponent & _IContent & {
  __typename?: 'PageSeoSettings';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  metaTitle: Maybe<Scalars['String']['output']>;
};


export type PageSeoSettings_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PageSeoSettings_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PageSeoSettingsAutocomplete = {
  __typename?: 'PageSeoSettingsAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PageSeoSettingsFacet = {
  __typename?: 'PageSeoSettingsFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PageSeoSettingsOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PageSeoSettingsOutput = {
  __typename?: 'PageSeoSettingsOutput';
  autocomplete: Maybe<PageSeoSettingsAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PageSeoSettingsFacet>;
  item: Maybe<PageSeoSettings>;
  items: Maybe<Array<Maybe<PageSeoSettings>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PageSeoSettingsOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSeoSettingsProperty = {
  __typename?: 'PageSeoSettingsProperty';
  metaTitle: Maybe<Scalars['String']['output']>;
};

export type PageSeoSettingsWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PageSeoSettingsWhereInput>>>;
};

export type PageWhereInput = {
  Blocks: InputMaybe<_IContentWhereInput>;
  Image: InputMaybe<_IContentWhereInput>;
  ImageBlock: InputMaybe<BlockImagePropertyWhereInput>;
  SSImage: InputMaybe<_IContentWhereInput>;
  _and: InputMaybe<Array<InputMaybe<PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PageWhereInput>>>;
};

export type ParagraphElement = IData & _IComponent & _IContent & {
  __typename?: 'ParagraphElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  text: Maybe<RichText>;
};


export type ParagraphElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ParagraphElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ParagraphElementAutocomplete = {
  __typename?: 'ParagraphElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  text: Maybe<RichTextAutocomplete>;
};

export type ParagraphElementFacet = {
  __typename?: 'ParagraphElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  text: Maybe<RichTextFacet>;
};

export type ParagraphElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  text: InputMaybe<RichTextOrderByInput>;
};

export type ParagraphElementOutput = {
  __typename?: 'ParagraphElementOutput';
  autocomplete: Maybe<ParagraphElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ParagraphElementFacet>;
  item: Maybe<ParagraphElement>;
  items: Maybe<Array<Maybe<ParagraphElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ParagraphElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ParagraphElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ParagraphElementWhereInput>>>;
  text: InputMaybe<RichTextWhereInput>;
};

export type PinnedInput = {
  /** Pinned collection keys */
  collections: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type PortfolioGridBlock = IData & _IComponent & _IContent & {
  __typename?: 'PortfolioGridBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  items: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioGridBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioGridBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioGridBlockAutocomplete = {
  __typename?: 'PortfolioGridBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  items: Maybe<_IContentAutocomplete>;
};

export type PortfolioGridBlockFacet = {
  __typename?: 'PortfolioGridBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  items: Maybe<_IContentFacet>;
};

export type PortfolioGridBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  items: InputMaybe<_IContentOrderByInput>;
};

export type PortfolioGridBlockOutput = {
  __typename?: 'PortfolioGridBlockOutput';
  autocomplete: Maybe<PortfolioGridBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioGridBlockFacet>;
  item: Maybe<PortfolioGridBlock>;
  items: Maybe<Array<Maybe<PortfolioGridBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioGridBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioGridBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioGridBlockWhereInput>>>;
  items: InputMaybe<_IContentWhereInput>;
};

export type PortfolioItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'PortfolioItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  imageUrl: Maybe<Scalars['String']['output']>;
  link: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type PortfolioItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type PortfolioItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type PortfolioItemBlockAutocomplete = {
  __typename?: 'PortfolioItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type PortfolioItemBlockFacet = {
  __typename?: 'PortfolioItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type PortfolioItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type PortfolioItemBlockOutput = {
  __typename?: 'PortfolioItemBlockOutput';
  autocomplete: Maybe<PortfolioItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<PortfolioItemBlockFacet>;
  item: Maybe<PortfolioItemBlock>;
  items: Maybe<Array<Maybe<PortfolioItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type PortfolioItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type PortfolioItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<PortfolioItemBlockWhereInput>>>;
};

export type ProfileBlock = IData & _IComponent & _IContent & {
  __typename?: 'ProfileBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  bio: Maybe<Scalars['String']['output']>;
  imageSrc: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ProfileBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ProfileBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ProfileBlockAutocomplete = {
  __typename?: 'ProfileBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ProfileBlockFacet = {
  __typename?: 'ProfileBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ProfileBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ProfileBlockOutput = {
  __typename?: 'ProfileBlockOutput';
  autocomplete: Maybe<ProfileBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ProfileBlockFacet>;
  item: Maybe<ProfileBlock>;
  items: Maybe<Array<Maybe<ProfileBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ProfileBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProfileBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ProfileBlockWhereInput>>>;
};

export type Query = {
  __typename?: 'Query';
  ArticleGroupPage: Maybe<ArticleGroupPageOutput>;
  ArticleListElement: Maybe<ArticleListElementOutput>;
  ArticlePage: Maybe<ArticlePageOutput>;
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BannerBlock: Maybe<BannerBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlockImage: Maybe<BlockImageOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CTASectionBlock: Maybe<CtaSectionBlockOutput>;
  CardBlock: Maybe<CardBlockOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Data: Maybe<DataOutput>;
  DefaultImage: Maybe<DefaultImageOutput>;
  DefaultVideo: Maybe<DefaultVideoOutput>;
  Dictionary: Maybe<DictionaryOutput>;
  DictionaryItem: Maybe<DictionaryItemOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeaderBlock: Maybe<HeaderBlockOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  Image: Maybe<ImageOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  NavigationMenuBlock: Maybe<NavigationMenuBlockOutput>;
  OfficeLocation: Maybe<OfficeLocationOutput>;
  Page: Maybe<PageOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  SSFeatures: Maybe<SsFeaturesOutput>;
  SSHeroBlock: Maybe<SsHeroBlockOutput>;
  SSImageBlock: Maybe<SsImageBlockOutput>;
  SSMobileBankingBlock: Maybe<SsMobileBankingBlockOutput>;
  SSTextBlock: Maybe<SsTextBlockOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  SouthStateImageBlock: Maybe<SouthStateImageBlockOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  Video: Maybe<VideoOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  WebsiteFooter: Maybe<WebsiteFooterOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryArticleGroupPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleGroupPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleGroupPageWhereInput>;
};


export type QueryArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryArticlePageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticlePageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticlePageWhereInput>;
};


export type QueryAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryBannerBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BannerBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BannerBlockWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryBlockImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlockImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlockImageWhereInput>;
};


export type QueryButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryCtaSectionBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaSectionBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaSectionBlockWhereInput>;
};


export type QueryCardBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CardBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CardBlockWhereInput>;
};


export type QueryContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryDefaultImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DefaultImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DefaultImageWhereInput>;
};


export type QueryDefaultVideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DefaultVideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DefaultVideoWhereInput>;
};


export type QueryDictionaryArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DictionaryOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DictionaryWhereInput>;
};


export type QueryDictionaryItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DictionaryItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterWhereInput>;
};


export type QueryFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryHeaderBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingElementWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageWhereInput>;
};


export type QueryImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageElementWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryNavigationMenuBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavigationMenuBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryOfficeLocationArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OfficeLocationOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageWhereInput>;
};


export type QueryPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QuerySeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QuerySsFeaturesArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsFeaturesOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsFeaturesWhereInput>;
};


export type QuerySsHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsHeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsHeroBlockWhereInput>;
};


export type QuerySsImageBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsImageBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsImageBlockWhereInput>;
};


export type QuerySsMobileBankingBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsMobileBankingBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsMobileBankingBlockWhereInput>;
};


export type QuerySsTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsTextBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsTextBlockWhereInput>;
};


export type QueryServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QuerySocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QuerySouthStateImageBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SouthStateImageBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SouthStateImageBlockWhereInput>;
};


export type QueryStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryVideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryWebsiteFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<WebsiteFooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<WebsiteFooterWhereInput>;
};


export type Query_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArticleGroupPage: Maybe<ArticleGroupPageOutput>;
  ArticleListElement: Maybe<ArticleListElementOutput>;
  ArticlePage: Maybe<ArticlePageOutput>;
  AvailabilityBlock: Maybe<AvailabilityBlockOutput>;
  BannerBlock: Maybe<BannerBlockOutput>;
  BlankExperience: Maybe<BlankExperienceOutput>;
  BlankSection: Maybe<BlankSectionOutput>;
  BlockImage: Maybe<BlockImageOutput>;
  ButtonBlock: Maybe<ButtonBlockOutput>;
  CMSPage: Maybe<CmsPageOutput>;
  CTAElement: Maybe<CtaElementOutput>;
  CTASectionBlock: Maybe<CtaSectionBlockOutput>;
  CardBlock: Maybe<CardBlockOutput>;
  ContactBlock: Maybe<ContactBlockOutput>;
  Data: Maybe<DataOutput>;
  DefaultImage: Maybe<DefaultImageOutput>;
  DefaultVideo: Maybe<DefaultVideoOutput>;
  Dictionary: Maybe<DictionaryOutput>;
  DictionaryItem: Maybe<DictionaryItemOutput>;
  Footer: Maybe<FooterOutput>;
  FooterColumn: Maybe<FooterColumnOutput>;
  GenericMedia: Maybe<GenericMediaOutput>;
  GenericMedia123: Maybe<GenericMedia123Output>;
  Header: Maybe<HeaderOutput>;
  HeaderBlock: Maybe<HeaderBlockOutput>;
  HeadingElement: Maybe<HeadingElementOutput>;
  HeroBlock: Maybe<HeroBlockOutput>;
  Image: Maybe<ImageOutput>;
  ImageElement: Maybe<ImageElementOutput>;
  ImageMedia: Maybe<ImageMediaOutput>;
  LogoItemBlock: Maybe<LogoItemBlockOutput>;
  LogosBlock: Maybe<LogosBlockOutput>;
  MegaMenuGroupBlock: Maybe<MegaMenuGroupBlockOutput>;
  NavItem: Maybe<NavItemOutput>;
  NavigationMenuBlock: Maybe<NavigationMenuBlockOutput>;
  OfficeLocation: Maybe<OfficeLocationOutput>;
  Page: Maybe<PageOutput>;
  PageSeoSettings: Maybe<PageSeoSettingsOutput>;
  ParagraphElement: Maybe<ParagraphElementOutput>;
  PortfolioGridBlock: Maybe<PortfolioGridBlockOutput>;
  PortfolioItemBlock: Maybe<PortfolioItemBlockOutput>;
  ProfileBlock: Maybe<ProfileBlockOutput>;
  SEOExperience: Maybe<SeoExperienceOutput>;
  SSFeatures: Maybe<SsFeaturesOutput>;
  SSHeroBlock: Maybe<SsHeroBlockOutput>;
  SSImageBlock: Maybe<SsImageBlockOutput>;
  SSMobileBankingBlock: Maybe<SsMobileBankingBlockOutput>;
  SSTextBlock: Maybe<SsTextBlockOutput>;
  ServiceItem: Maybe<ServiceItemOutput>;
  ServicesBlock: Maybe<ServicesBlockOutput>;
  SocialLink: Maybe<SocialLinkOutput>;
  SouthStateImageBlock: Maybe<SouthStateImageBlockOutput>;
  StartPage: Maybe<StartPageOutput>;
  StoryBlock: Maybe<StoryBlockOutput>;
  SysContentFolder: Maybe<SysContentFolderOutput>;
  TestimonialElement: Maybe<TestimonialElementOutput>;
  TestimonialItem: Maybe<TestimonialItemOutput>;
  TestimonialItemBlock: Maybe<TestimonialItemBlockOutput>;
  TestimonialsBlock: Maybe<TestimonialsBlockOutput>;
  Video: Maybe<VideoOutput>;
  VideoMedia: Maybe<VideoMediaOutput>;
  WebsiteFooter: Maybe<WebsiteFooterOutput>;
  _Component: Maybe<_ComponentOutput>;
  _Content: Maybe<_ContentOutput>;
  _Experience: Maybe<_ExperienceOutput>;
  _Folder: Maybe<_FolderOutput>;
  _Image: Maybe<_ImageOutput>;
  _Media: Maybe<_MediaOutput>;
  _Page: Maybe<_PageOutput>;
  _Section: Maybe<_SectionOutput>;
  _Video: Maybe<_VideoOutput>;
};


export type QueryRefArticleGroupPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleGroupPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleGroupPageWhereInput>;
};


export type QueryRefArticleListElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticleListElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticleListElementWhereInput>;
};


export type QueryRefArticlePageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ArticlePageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefAvailabilityBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<AvailabilityBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<AvailabilityBlockWhereInput>;
};


export type QueryRefBannerBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BannerBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BannerBlockWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlankSectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefBlockImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<BlockImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<BlockImageWhereInput>;
};


export type QueryRefButtonBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ButtonBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ButtonBlockWhereInput>;
};


export type QueryRefCmsPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CmsPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CmsPageWhereInput>;
};


export type QueryRefCtaElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaElementWhereInput>;
};


export type QueryRefCtaSectionBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CtaSectionBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CtaSectionBlockWhereInput>;
};


export type QueryRefCardBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<CardBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<CardBlockWhereInput>;
};


export type QueryRefContactBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ContactBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ContactBlockWhereInput>;
};


export type QueryRefDataArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy: InputMaybe<DataOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DataWhereInput>;
};


export type QueryRefDefaultImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DefaultImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DefaultImageWhereInput>;
};


export type QueryRefDefaultVideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DefaultVideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DefaultVideoWhereInput>;
};


export type QueryRefDictionaryArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DictionaryOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DictionaryWhereInput>;
};


export type QueryRefDictionaryItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<DictionaryItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<DictionaryItemWhereInput>;
};


export type QueryRefFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterWhereInput>;
};


export type QueryRefFooterColumnArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<FooterColumnOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<FooterColumnWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefGenericMedia123Args = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<GenericMedia123OrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<GenericMedia123WhereInput>;
};


export type QueryRefHeaderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderWhereInput>;
};


export type QueryRefHeaderBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeaderBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeaderBlockWhereInput>;
};


export type QueryRefHeadingElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeadingElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeadingElementWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<HeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageWhereInput>;
};


export type QueryRefImageElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageElementWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ImageMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLogoItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogoItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogoItemBlockWhereInput>;
};


export type QueryRefLogosBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<LogosBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<LogosBlockWhereInput>;
};


export type QueryRefMegaMenuGroupBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<MegaMenuGroupBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<MegaMenuGroupBlockWhereInput>;
};


export type QueryRefNavItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavItemWhereInput>;
};


export type QueryRefNavigationMenuBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<NavigationMenuBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<NavigationMenuBlockWhereInput>;
};


export type QueryRefOfficeLocationArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<OfficeLocationOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<OfficeLocationWhereInput>;
};


export type QueryRefPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageWhereInput>;
};


export type QueryRefPageSeoSettingsArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PageSeoSettingsOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PageSeoSettingsWhereInput>;
};


export type QueryRefParagraphElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ParagraphElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ParagraphElementWhereInput>;
};


export type QueryRefPortfolioGridBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioGridBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioGridBlockWhereInput>;
};


export type QueryRefPortfolioItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<PortfolioItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<PortfolioItemBlockWhereInput>;
};


export type QueryRefProfileBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ProfileBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ProfileBlockWhereInput>;
};


export type QueryRefSeoExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SeoExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SeoExperienceWhereInput>;
};


export type QueryRefSsFeaturesArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsFeaturesOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsFeaturesWhereInput>;
};


export type QueryRefSsHeroBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsHeroBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsHeroBlockWhereInput>;
};


export type QueryRefSsImageBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsImageBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsImageBlockWhereInput>;
};


export type QueryRefSsMobileBankingBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsMobileBankingBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsMobileBankingBlockWhereInput>;
};


export type QueryRefSsTextBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SsTextBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SsTextBlockWhereInput>;
};


export type QueryRefServiceItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServiceItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServiceItemWhereInput>;
};


export type QueryRefServicesBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<ServicesBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<ServicesBlockWhereInput>;
};


export type QueryRefSocialLinkArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SocialLinkOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SocialLinkWhereInput>;
};


export type QueryRefSouthStateImageBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SouthStateImageBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SouthStateImageBlockWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StartPageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StartPageWhereInput>;
};


export type QueryRefStoryBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<StoryBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<StoryBlockWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<SysContentFolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTestimonialElementArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialElementOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialElementWhereInput>;
};


export type QueryRefTestimonialItemArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemWhereInput>;
};


export type QueryRefTestimonialItemBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialItemBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialItemBlockWhereInput>;
};


export type QueryRefTestimonialsBlockArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<TestimonialsBlockOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<TestimonialsBlockWhereInput>;
};


export type QueryRefVideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<VideoMediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRefWebsiteFooterArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<WebsiteFooterOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<WebsiteFooterWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ComponentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ContentOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ExperienceOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_FolderOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_ImageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_MediaOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_PageOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_SectionOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor: InputMaybe<Scalars['String']['input']>;
  ids: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy: InputMaybe<_VideoOrderByInput>;
  pinned: InputMaybe<PinnedInput>;
  skip?: Scalars['Int']['input'];
  variation: InputMaybe<VariationInput>;
  where: InputMaybe<_VideoWhereInput>;
};

export enum Ranking {
  BoostOnly = 'BOOST_ONLY',
  Doc = 'DOC',
  Relevance = 'RELEVANCE',
  Semantic = 'SEMANTIC'
}

export type RichText = {
  __typename?: 'RichText';
  html: Maybe<Scalars['String']['output']>;
  json: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html: InputMaybe<StringFilterInput>;
};

export type SeoExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'SEOExperience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type SeoExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SeoExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SeoExperienceAutocomplete = {
  __typename?: 'SEOExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type SeoExperienceFacet = {
  __typename?: 'SEOExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type SeoExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type SeoExperienceOutput = {
  __typename?: 'SEOExperienceOutput';
  autocomplete: Maybe<SeoExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SeoExperienceFacet>;
  item: Maybe<SeoExperience>;
  items: Maybe<Array<Maybe<SeoExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SeoExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SeoExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SeoExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type SsFeatures = IData & _IComponent & _IContent & {
  __typename?: 'SSFeatures';
  Description: Maybe<Scalars['String']['output']>;
  Feature1Description: Maybe<Scalars['String']['output']>;
  Feature1Icon: Maybe<Scalars['String']['output']>;
  Feature1Title: Maybe<Scalars['String']['output']>;
  Feature2Description: Maybe<Scalars['String']['output']>;
  Feature2Icon: Maybe<Scalars['String']['output']>;
  Feature2Title: Maybe<Scalars['String']['output']>;
  Feature3Description: Maybe<Scalars['String']['output']>;
  Feature3Icon: Maybe<Scalars['String']['output']>;
  Feature3Title: Maybe<Scalars['String']['output']>;
  Feature4Description: Maybe<Scalars['String']['output']>;
  Feature4Icon: Maybe<Scalars['String']['output']>;
  Feature4Title: Maybe<Scalars['String']['output']>;
  Features: Maybe<RichText>;
  Heading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SsFeatures_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SsFeatures_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SsFeaturesAutocomplete = {
  __typename?: 'SSFeaturesAutocomplete';
  Features: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SsFeaturesFacet = {
  __typename?: 'SSFeaturesFacet';
  Features: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SsFeaturesOrderByInput = {
  Features: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SsFeaturesOutput = {
  __typename?: 'SSFeaturesOutput';
  autocomplete: Maybe<SsFeaturesAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SsFeaturesFacet>;
  item: Maybe<SsFeatures>;
  items: Maybe<Array<Maybe<SsFeatures>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SsFeaturesOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SsFeaturesWhereInput = {
  Features: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<SsFeaturesWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SsFeaturesWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SsFeaturesWhereInput>>>;
};

export type SsHeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'SSHeroBlock';
  Description: Maybe<RichText>;
  Heading: Maybe<Scalars['String']['output']>;
  ImageURL: Maybe<ContentReference>;
  PrimaryButtonLink: Maybe<Link>;
  PrimaryButtonText: Maybe<Scalars['String']['output']>;
  SecondaryButtonLink: Maybe<Link>;
  SecondaryButtonText: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SsHeroBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SsHeroBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SsHeroBlockAutocomplete = {
  __typename?: 'SSHeroBlockAutocomplete';
  Description: Maybe<RichTextAutocomplete>;
  ImageURL: Maybe<ContentReferenceAutocomplete>;
  PrimaryButtonLink: Maybe<LinkAutocomplete>;
  SecondaryButtonLink: Maybe<LinkAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SsHeroBlockFacet = {
  __typename?: 'SSHeroBlockFacet';
  Description: Maybe<RichTextFacet>;
  ImageURL: Maybe<ContentReferenceFacet>;
  PrimaryButtonLink: Maybe<LinkFacet>;
  SecondaryButtonLink: Maybe<LinkFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SsHeroBlockOrderByInput = {
  Description: InputMaybe<RichTextOrderByInput>;
  ImageURL: InputMaybe<ContentReferenceOrderByInput>;
  PrimaryButtonLink: InputMaybe<LinkOrderByInput>;
  SecondaryButtonLink: InputMaybe<LinkOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SsHeroBlockOutput = {
  __typename?: 'SSHeroBlockOutput';
  autocomplete: Maybe<SsHeroBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SsHeroBlockFacet>;
  item: Maybe<SsHeroBlock>;
  items: Maybe<Array<Maybe<SsHeroBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SsHeroBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SsHeroBlockWhereInput = {
  Description: InputMaybe<RichTextWhereInput>;
  ImageURL: InputMaybe<ContentReferenceWhereInput>;
  PrimaryButtonLink: InputMaybe<LinkWhereInput>;
  SecondaryButtonLink: InputMaybe<LinkWhereInput>;
  _and: InputMaybe<Array<InputMaybe<SsHeroBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SsHeroBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SsHeroBlockWhereInput>>>;
};

export type SsImageBlock = IData & _IComponent & _IContent & {
  __typename?: 'SSImageBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SsImageBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SsImageBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SsImageBlockAutocomplete = {
  __typename?: 'SSImageBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SsImageBlockFacet = {
  __typename?: 'SSImageBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SsImageBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SsImageBlockOutput = {
  __typename?: 'SSImageBlockOutput';
  autocomplete: Maybe<SsImageBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SsImageBlockFacet>;
  item: Maybe<SsImageBlock>;
  items: Maybe<Array<Maybe<SsImageBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SsImageBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SsImageBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SsImageBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SsImageBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SsImageBlockWhereInput>>>;
};

export type SsMobileBankingBlock = IData & _IComponent & _IContent & {
  __typename?: 'SSMobileBankingBlock';
  CTALink: Maybe<Link>;
  CTAText: Maybe<Scalars['String']['output']>;
  Description: Maybe<RichText>;
  Feature1Description: Maybe<RichText>;
  Feature1Title: Maybe<Scalars['String']['output']>;
  Feature2Title: Maybe<Scalars['String']['output']>;
  Feature3Title: Maybe<Scalars['String']['output']>;
  Feature4Title: Maybe<Scalars['String']['output']>;
  Heading: Maybe<Scalars['String']['output']>;
  Image: Maybe<ContentReference>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SsMobileBankingBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SsMobileBankingBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SsMobileBankingBlockAutocomplete = {
  __typename?: 'SSMobileBankingBlockAutocomplete';
  CTALink: Maybe<LinkAutocomplete>;
  Description: Maybe<RichTextAutocomplete>;
  Feature1Description: Maybe<RichTextAutocomplete>;
  Image: Maybe<ContentReferenceAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SsMobileBankingBlockFacet = {
  __typename?: 'SSMobileBankingBlockFacet';
  CTALink: Maybe<LinkFacet>;
  Description: Maybe<RichTextFacet>;
  Feature1Description: Maybe<RichTextFacet>;
  Image: Maybe<ContentReferenceFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SsMobileBankingBlockOrderByInput = {
  CTALink: InputMaybe<LinkOrderByInput>;
  Description: InputMaybe<RichTextOrderByInput>;
  Feature1Description: InputMaybe<RichTextOrderByInput>;
  Image: InputMaybe<ContentReferenceOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SsMobileBankingBlockOutput = {
  __typename?: 'SSMobileBankingBlockOutput';
  autocomplete: Maybe<SsMobileBankingBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SsMobileBankingBlockFacet>;
  item: Maybe<SsMobileBankingBlock>;
  items: Maybe<Array<Maybe<SsMobileBankingBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SsMobileBankingBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SsMobileBankingBlockWhereInput = {
  CTALink: InputMaybe<LinkWhereInput>;
  Description: InputMaybe<RichTextWhereInput>;
  Feature1Description: InputMaybe<RichTextWhereInput>;
  Image: InputMaybe<ContentReferenceWhereInput>;
  _and: InputMaybe<Array<InputMaybe<SsMobileBankingBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SsMobileBankingBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SsMobileBankingBlockWhereInput>>>;
};

export type SsTextBlock = IData & _IComponent & _IContent & {
  __typename?: 'SSTextBlock';
  Body: Maybe<RichText>;
  Description: Maybe<RichText>;
  Heading: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SsTextBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SsTextBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SsTextBlockAutocomplete = {
  __typename?: 'SSTextBlockAutocomplete';
  Body: Maybe<RichTextAutocomplete>;
  Description: Maybe<RichTextAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SsTextBlockFacet = {
  __typename?: 'SSTextBlockFacet';
  Body: Maybe<RichTextFacet>;
  Description: Maybe<RichTextFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SsTextBlockOrderByInput = {
  Body: InputMaybe<RichTextOrderByInput>;
  Description: InputMaybe<RichTextOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SsTextBlockOutput = {
  __typename?: 'SSTextBlockOutput';
  autocomplete: Maybe<SsTextBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SsTextBlockFacet>;
  item: Maybe<SsTextBlock>;
  items: Maybe<Array<Maybe<SsTextBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SsTextBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SsTextBlockWhereInput = {
  Body: InputMaybe<RichTextWhereInput>;
  Description: InputMaybe<RichTextWhereInput>;
  _and: InputMaybe<Array<InputMaybe<SsTextBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SsTextBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SsTextBlockWhereInput>>>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type ServiceItem = IData & _IComponent & _IContent & {
  __typename?: 'ServiceItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  description: Maybe<Scalars['String']['output']>;
  icon: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type ServiceItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServiceItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServiceItemAutocomplete = {
  __typename?: 'ServiceItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type ServiceItemFacet = {
  __typename?: 'ServiceItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type ServiceItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type ServiceItemOutput = {
  __typename?: 'ServiceItemOutput';
  autocomplete: Maybe<ServiceItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServiceItemFacet>;
  item: Maybe<ServiceItem>;
  items: Maybe<Array<Maybe<ServiceItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServiceItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServiceItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServiceItemWhereInput>>>;
};

export type ServicesBlock = IData & _IComponent & _IContent & {
  __typename?: 'ServicesBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  services: Maybe<Array<Maybe<_IContent>>>;
};


export type ServicesBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type ServicesBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type ServicesBlockAutocomplete = {
  __typename?: 'ServicesBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  services: Maybe<_IContentAutocomplete>;
};

export type ServicesBlockFacet = {
  __typename?: 'ServicesBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  services: Maybe<_IContentFacet>;
};

export type ServicesBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  services: InputMaybe<_IContentOrderByInput>;
};

export type ServicesBlockOutput = {
  __typename?: 'ServicesBlockOutput';
  autocomplete: Maybe<ServicesBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<ServicesBlockFacet>;
  item: Maybe<ServicesBlock>;
  items: Maybe<Array<Maybe<ServicesBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type ServicesBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type ServicesBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<ServicesBlockWhereInput>>>;
  services: InputMaybe<_IContentWhereInput>;
};

export type SocialLink = IData & _IComponent & _IContent & {
  __typename?: 'SocialLink';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  href: Maybe<Scalars['String']['output']>;
  platform: Maybe<Scalars['String']['output']>;
};


export type SocialLink_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SocialLink_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SocialLinkAutocomplete = {
  __typename?: 'SocialLinkAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SocialLinkFacet = {
  __typename?: 'SocialLinkFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SocialLinkOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SocialLinkOutput = {
  __typename?: 'SocialLinkOutput';
  autocomplete: Maybe<SocialLinkAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SocialLinkFacet>;
  item: Maybe<SocialLink>;
  items: Maybe<Array<Maybe<SocialLink>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SocialLinkOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialLinkWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SocialLinkWhereInput>>>;
};

export type SouthStateImageBlock = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'SouthStateImageBlock';
  Image: Maybe<RichText>;
  URL: Maybe<ContentUrl>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SouthStateImageBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SouthStateImageBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SouthStateImageBlockAutocomplete = {
  __typename?: 'SouthStateImageBlockAutocomplete';
  Image: Maybe<RichTextAutocomplete>;
  URL: Maybe<ContentUrlAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SouthStateImageBlockFacet = {
  __typename?: 'SouthStateImageBlockFacet';
  Image: Maybe<RichTextFacet>;
  URL: Maybe<ContentUrlFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SouthStateImageBlockOrderByInput = {
  Image: InputMaybe<RichTextOrderByInput>;
  URL: InputMaybe<ContentUrlOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SouthStateImageBlockOutput = {
  __typename?: 'SouthStateImageBlockOutput';
  autocomplete: Maybe<SouthStateImageBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SouthStateImageBlockFacet>;
  item: Maybe<SouthStateImageBlock>;
  items: Maybe<Array<Maybe<SouthStateImageBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SouthStateImageBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SouthStateImageBlockWhereInput = {
  Image: InputMaybe<RichTextWhereInput>;
  URL: InputMaybe<ContentUrlWhereInput>;
  _and: InputMaybe<Array<InputMaybe<SouthStateImageBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SouthStateImageBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SouthStateImageBlockWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  blocks: Maybe<Array<Maybe<_IContent>>>;
  keywords: Maybe<Scalars['String']['output']>;
  shortDescription: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  blocks: Maybe<_IContentAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  blocks: Maybe<_IContentFacet>;
};

export type StartPageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  blocks: InputMaybe<_IContentOrderByInput>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete: Maybe<StartPageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StartPageFacet>;
  item: Maybe<StartPage>;
  items: Maybe<Array<Maybe<StartPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  blocks: InputMaybe<_IContentWhereInput>;
};

export type StoryBlock = IData & _IComponent & _IContent & {
  __typename?: 'StoryBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  highlights: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  story: Maybe<Scalars['String']['output']>;
};


export type StoryBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type StoryBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type StoryBlockAutocomplete = {
  __typename?: 'StoryBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type StoryBlockFacet = {
  __typename?: 'StoryBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type StoryBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type StoryBlockOutput = {
  __typename?: 'StoryBlockOutput';
  autocomplete: Maybe<StoryBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<StoryBlockFacet>;
  item: Maybe<StoryBlock>;
  items: Maybe<Array<Maybe<StoryBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type StoryBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type StoryBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<StoryBlockWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count: Maybe<Scalars['Int']['output']>;
  name: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export enum SynonymSlot {
  /** synonym slot 1 */
  One = 'ONE',
  /** synonym slot 2 */
  Two = 'TWO'
}

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete: Maybe<SysContentFolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<SysContentFolderFacet>;
  item: Maybe<SysContentFolder>;
  items: Maybe<Array<Maybe<SysContentFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TestimonialElement = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialElement';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  customerImage: Maybe<ContentReference>;
  customerLocation: Maybe<Scalars['String']['output']>;
  customerName: Maybe<Scalars['String']['output']>;
  referenceText: Maybe<RichText>;
  referenceTitle: Maybe<Scalars['String']['output']>;
};


export type TestimonialElement_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialElement_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialElementAutocomplete = {
  __typename?: 'TestimonialElementAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  customerImage: Maybe<ContentReferenceAutocomplete>;
  referenceText: Maybe<RichTextAutocomplete>;
};

export type TestimonialElementFacet = {
  __typename?: 'TestimonialElementFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  customerImage: Maybe<ContentReferenceFacet>;
  referenceText: Maybe<RichTextFacet>;
};

export type TestimonialElementOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  customerImage: InputMaybe<ContentReferenceOrderByInput>;
  referenceText: InputMaybe<RichTextOrderByInput>;
};

export type TestimonialElementOutput = {
  __typename?: 'TestimonialElementOutput';
  autocomplete: Maybe<TestimonialElementAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialElementFacet>;
  item: Maybe<TestimonialElement>;
  items: Maybe<Array<Maybe<TestimonialElement>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialElementOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialElementWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialElementWhereInput>>>;
  customerImage: InputMaybe<ContentReferenceWhereInput>;
  referenceText: InputMaybe<RichTextWhereInput>;
};

export type TestimonialItem = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialItem';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItem_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItem_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemAutocomplete = {
  __typename?: 'TestimonialItemAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlock = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialItemBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  avatarSrc: Maybe<Scalars['String']['output']>;
  content: Maybe<Scalars['String']['output']>;
  fullName: Maybe<Scalars['String']['output']>;
  position: Maybe<Scalars['String']['output']>;
};


export type TestimonialItemBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialItemBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialItemBlockAutocomplete = {
  __typename?: 'TestimonialItemBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type TestimonialItemBlockFacet = {
  __typename?: 'TestimonialItemBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemBlockOutput = {
  __typename?: 'TestimonialItemBlockOutput';
  autocomplete: Maybe<TestimonialItemBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemBlockFacet>;
  item: Maybe<TestimonialItemBlock>;
  items: Maybe<Array<Maybe<TestimonialItemBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemBlockWhereInput>>>;
};

export type TestimonialItemFacet = {
  __typename?: 'TestimonialItemFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type TestimonialItemOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type TestimonialItemOutput = {
  __typename?: 'TestimonialItemOutput';
  autocomplete: Maybe<TestimonialItemAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialItemFacet>;
  item: Maybe<TestimonialItem>;
  items: Maybe<Array<Maybe<TestimonialItem>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialItemOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialItemWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialItemWhereInput>>>;
};

export type TestimonialsBlock = IData & _IComponent & _IContent & {
  __typename?: 'TestimonialsBlock';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  testimonials: Maybe<Array<Maybe<_IContent>>>;
  title: Maybe<Scalars['String']['output']>;
};


export type TestimonialsBlock_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type TestimonialsBlock_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type TestimonialsBlockAutocomplete = {
  __typename?: 'TestimonialsBlockAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  testimonials: Maybe<_IContentAutocomplete>;
};

export type TestimonialsBlockFacet = {
  __typename?: 'TestimonialsBlockFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  testimonials: Maybe<_IContentFacet>;
};

export type TestimonialsBlockOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  testimonials: InputMaybe<_IContentOrderByInput>;
};

export type TestimonialsBlockOutput = {
  __typename?: 'TestimonialsBlockOutput';
  autocomplete: Maybe<TestimonialsBlockAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<TestimonialsBlockFacet>;
  item: Maybe<TestimonialsBlock>;
  items: Maybe<Array<Maybe<TestimonialsBlock>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type TestimonialsBlockOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialsBlockWhereInput = {
  _and: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<TestimonialsBlockWhereInput>>>;
  testimonials: InputMaybe<_IContentWhereInput>;
};

export enum VariationIncludeMode {
  All = 'ALL',
  None = 'NONE',
  Some = 'SOME'
}

export type VariationInput = {
  include: InputMaybe<VariationIncludeMode>;
  includeOriginal: InputMaybe<Scalars['Boolean']['input']>;
  value: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'Video';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoAutocomplete = {
  __typename?: 'VideoAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoFacet = {
  __typename?: 'VideoFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete: Maybe<VideoMediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoMediaFacet>;
  item: Maybe<VideoMedia>;
  items: Maybe<Array<Maybe<VideoMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type VideoOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type VideoOutput = {
  __typename?: 'VideoOutput';
  autocomplete: Maybe<VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<VideoFacet>;
  item: Maybe<Video>;
  items: Maybe<Array<Maybe<Video>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<VideoWhereInput>>>;
};

export type WebsiteFooter = IData & _IComponent & _IContent & {
  __typename?: 'WebsiteFooter';
  FooterFirstLinkList: Maybe<NavigationMenuBlockProperty>;
  FooterLegalLinks: Maybe<Array<Maybe<Link>>>;
  FooterLogo: Maybe<ContentReference>;
  FooterLogoAltText: Maybe<Scalars['String']['output']>;
  FooterMainOfficeLocation: Maybe<Array<Maybe<_IContent>>>;
  FooterSecondLinkList: Maybe<NavigationMenuBlockProperty>;
  FooterThirdLinkList: Maybe<NavigationMenuBlockProperty>;
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type WebsiteFooter_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type WebsiteFooter_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type WebsiteFooterAutocomplete = {
  __typename?: 'WebsiteFooterAutocomplete';
  FooterFirstLinkList: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  FooterLegalLinks: Maybe<LinkAutocomplete>;
  FooterLogo: Maybe<ContentReferenceAutocomplete>;
  FooterMainOfficeLocation: Maybe<_IContentAutocomplete>;
  FooterSecondLinkList: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  FooterThirdLinkList: Maybe<NavigationMenuBlockPropertyAutocomplete>;
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type WebsiteFooterFacet = {
  __typename?: 'WebsiteFooterFacet';
  FooterFirstLinkList: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterLegalLinks: Maybe<LinkFacet>;
  FooterLogo: Maybe<ContentReferenceFacet>;
  FooterMainOfficeLocation: Maybe<_IContentFacet>;
  FooterSecondLinkList: Maybe<NavigationMenuBlockPropertyFacet>;
  FooterThirdLinkList: Maybe<NavigationMenuBlockPropertyFacet>;
  _metadata: Maybe<IContentMetadataFacet>;
};

export type WebsiteFooterOrderByInput = {
  FooterFirstLinkList: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterLegalLinks: InputMaybe<LinkOrderByInput>;
  FooterLogo: InputMaybe<ContentReferenceOrderByInput>;
  FooterMainOfficeLocation: InputMaybe<_IContentOrderByInput>;
  FooterSecondLinkList: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  FooterThirdLinkList: InputMaybe<NavigationMenuBlockPropertyOrderByInput>;
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type WebsiteFooterOutput = {
  __typename?: 'WebsiteFooterOutput';
  autocomplete: Maybe<WebsiteFooterAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<WebsiteFooterFacet>;
  item: Maybe<WebsiteFooter>;
  items: Maybe<Array<Maybe<WebsiteFooter>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type WebsiteFooterOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type WebsiteFooterWhereInput = {
  FooterFirstLinkList: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterLegalLinks: InputMaybe<LinkWhereInput>;
  FooterLogo: InputMaybe<ContentReferenceWhereInput>;
  FooterMainOfficeLocation: InputMaybe<_IContentWhereInput>;
  FooterSecondLinkList: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  FooterThirdLinkList: InputMaybe<NavigationMenuBlockPropertyWhereInput>;
  _and: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<WebsiteFooterWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Component_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete: Maybe<_ComponentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ComponentFacet>;
  item: Maybe<_IComponent>;
  items: Maybe<Array<Maybe<_IComponent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Content_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete: Maybe<_ContentAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ContentFacet>;
  item: Maybe<_IContent>;
  items: Maybe<Array<Maybe<_IContent>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete: Maybe<_ExperienceAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ExperienceFacet>;
  item: Maybe<_IExperience>;
  items: Maybe<Array<Maybe<_IExperience>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete: Maybe<_FolderAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_FolderFacet>;
  item: Maybe<_IFolder>;
  items: Maybe<Array<Maybe<_IFolder>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Image_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete: Maybe<_ImageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_ImageFacet>;
  item: Maybe<_IImage>;
  items: Maybe<Array<Maybe<_IImage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Media_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete: Maybe<_MediaAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_MediaFacet>;
  item: Maybe<_IMedia>;
  items: Maybe<Array<Maybe<_IMedia>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Page_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete: Maybe<_PageAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_PageFacet>;
  item: Maybe<_IPage>;
  items: Maybe<Array<Maybe<_IPage>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
  composition: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
  composition: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata: Maybe<IContentMetadataFacet>;
  composition: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
  composition: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete: Maybe<_SectionAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_SectionFacet>;
  item: Maybe<_ISection>;
  items: Maybe<Array<Maybe<_ISection>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children: Maybe<QueryRef>;
  _deleted: Maybe<Scalars['Bool']['output']>;
  _fulltext: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id: Maybe<Scalars['String']['output']>;
  _json: Maybe<Scalars['JSON']['output']>;
  _link: Maybe<QueryRef>;
  _metadata: Maybe<IContentMetadata>;
  _modified: Maybe<Scalars['Date']['output']>;
  _score: Maybe<Scalars['Float']['output']>;
};


export type _Video_FulltextArgs = {
  highlight: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore: InputMaybe<Scalars['Float']['input']>;
  _modified: InputMaybe<OrderBy>;
  _ranking: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete: Maybe<_VideoAutocomplete>;
  cursor: Maybe<Scalars['String']['output']>;
  facets: Maybe<_VideoFacet>;
  item: Maybe<_IVideo>;
  items: Maybe<Array<Maybe<_IVideo>>>;
  total: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext: InputMaybe<SearchableStringFilterInput>;
  _metadata: InputMaybe<IContentMetadataWhereInput>;
  _modified: InputMaybe<DateFilterInput>;
  _not: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export enum System_Locales {
  All = 'ALL',
  Neutral = 'NEUTRAL'
}

export type UsePinnedInput = {
  collectionId: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phrase: InputMaybe<Scalars['String']['input']>;
};

export type GetHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type GetHomePageQuery = { __typename?: 'Query', Page: { __typename?: 'PageOutput', items: Array<{ __typename?: 'Page', Title: string | null, _metadata:
        | { __typename?: 'ContentMetadata', displayName: string | null, url: { __typename?: 'ContentUrl', hierarchical: string | null } | null }
        | { __typename?: 'InstanceMetadata', displayName: string | null, url: { __typename?: 'ContentUrl', hierarchical: string | null } | null }
        | { __typename?: 'ItemMetadata', displayName: string | null, url: { __typename?: 'ContentUrl', hierarchical: string | null } | null }
        | { __typename?: 'MediaMetadata', displayName: string | null, url: { __typename?: 'ContentUrl', hierarchical: string | null } | null }
       | null, Blocks: Array<
        | { __typename: 'ArticleGroupPage' }
        | { __typename: 'ArticleListElement' }
        | { __typename: 'ArticlePage' }
        | { __typename: 'AvailabilityBlock' }
        | { __typename: 'BannerBlock' }
        | { __typename: 'BlankExperience' }
        | { __typename: 'BlankSection' }
        | { __typename: 'BlockImage', _id: string | null, _json: any | null, _metadata:
            | { __typename?: 'ContentMetadata', displayName: string | null }
            | { __typename?: 'InstanceMetadata', displayName: string | null }
            | { __typename?: 'ItemMetadata', displayName: string | null }
            | { __typename?: 'MediaMetadata', displayName: string | null }
           | null }
        | { __typename: 'ButtonBlock' }
        | { __typename: 'CMSPage' }
        | { __typename: 'CTAElement' }
        | { __typename: 'CTASectionBlock', Heading: string | null, PrimaryButtonText: string | null, SecondaryButtonText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, BackgroundImage: { __typename?: 'ContentUrl', default: string | null } | null, PrimaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, SecondaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null }
        | { __typename: 'CardBlock' }
        | { __typename: 'ContactBlock' }
        | { __typename: 'DefaultImage' }
        | { __typename: 'DefaultVideo' }
        | { __typename: 'Dictionary' }
        | { __typename: 'DictionaryItem' }
        | { __typename: 'Footer' }
        | { __typename: 'FooterColumn' }
        | { __typename: 'GenericMedia' }
        | { __typename: 'GenericMedia123' }
        | { __typename: 'Header' }
        | { __typename: 'HeaderBlock' }
        | { __typename: 'HeadingElement' }
        | { __typename: 'HeroBlock' }
        | { __typename: 'Image' }
        | { __typename: 'ImageElement' }
        | { __typename: 'ImageMedia' }
        | { __typename: 'LogoItemBlock' }
        | { __typename: 'LogosBlock' }
        | { __typename: 'MegaMenuGroupBlock' }
        | { __typename: 'NavItem' }
        | { __typename: 'NavigationMenuBlock' }
        | { __typename: 'OfficeLocation' }
        | { __typename: 'Page' }
        | { __typename: 'PageSeoSettings' }
        | { __typename: 'ParagraphElement' }
        | { __typename: 'PortfolioGridBlock' }
        | { __typename: 'PortfolioItemBlock' }
        | { __typename: 'ProfileBlock' }
        | { __typename: 'SEOExperience' }
        | { __typename: 'SSFeatures', Heading: string | null, Feature1Title: string | null, Feature1Description: string | null, Feature1Icon: string | null, Feature2Title: string | null, Feature2Description: string | null, Feature2Icon: string | null, Feature3Title: string | null, Feature3Description: string | null, Feature3Icon: string | null, Feature4Title: string | null, Feature4Description: string | null, Feature4Icon: string | null, descriptionText: string | null }
        | { __typename: 'SSHeroBlock', Heading: string | null, PrimaryButtonText: string | null, SecondaryButtonText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, PrimaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, SecondaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, ImageURL: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null }
        | { __typename: 'SSImageBlock' }
        | { __typename: 'SSMobileBankingBlock', Heading: string | null, Feature1Title: string | null, Feature2Title: string | null, Feature3Title: string | null, Feature4Title: string | null, CTAText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, Image: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, feature1Description: { __typename?: 'RichText', html: string | null } | null, CTALink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null }
        | { __typename: 'SSTextBlock', _id: string | null, Heading: string | null, Body: { __typename?: 'RichText', html: string | null } | null }
        | { __typename: 'ServiceItem' }
        | { __typename: 'ServicesBlock' }
        | { __typename: 'SocialLink' }
        | { __typename: 'SouthStateImageBlock' }
        | { __typename: 'StartPage' }
        | { __typename: 'StoryBlock' }
        | { __typename: 'SysContentFolder' }
        | { __typename: 'TestimonialElement' }
        | { __typename: 'TestimonialItem' }
        | { __typename: 'TestimonialItemBlock' }
        | { __typename: 'TestimonialsBlock' }
        | { __typename: 'Video' }
        | { __typename: 'VideoMedia' }
        | { __typename: 'WebsiteFooter' }
        | { __typename: '_Component' }
        | { __typename: '_Content' }
        | { __typename: '_Experience' }
        | { __typename: '_Folder' }
        | { __typename: '_Image' }
        | { __typename: '_Media' }
        | { __typename: '_Page' }
        | { __typename: '_Section' }
        | { __typename: '_Video' }
       | null> | null } | null> | null } | null };

export type SsTextBlockFragmentFragment = { __typename: 'SSTextBlock', _id: string | null, Heading: string | null, Body: { __typename?: 'RichText', html: string | null } | null };

export type BlockImageFragmentFragment = { __typename: 'BlockImage', _id: string | null, _json: any | null, _metadata:
    | { __typename?: 'ContentMetadata', displayName: string | null }
    | { __typename?: 'InstanceMetadata', displayName: string | null }
    | { __typename?: 'ItemMetadata', displayName: string | null }
    | { __typename?: 'MediaMetadata', displayName: string | null }
   | null };

export type CtaSectionFragmentFragment = { __typename?: 'CTASectionBlock', Heading: string | null, PrimaryButtonText: string | null, SecondaryButtonText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, BackgroundImage: { __typename?: 'ContentUrl', default: string | null } | null, PrimaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, SecondaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

export type SsHeroBlockFragmentFragment = { __typename?: 'SSHeroBlock', Heading: string | null, PrimaryButtonText: string | null, SecondaryButtonText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, PrimaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, SecondaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, ImageURL: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

export type SsFeaturesFragmentFragment = { __typename?: 'SSFeatures', Heading: string | null, Feature1Title: string | null, Feature1Description: string | null, Feature1Icon: string | null, Feature2Title: string | null, Feature2Description: string | null, Feature2Icon: string | null, Feature3Title: string | null, Feature3Description: string | null, Feature3Icon: string | null, Feature4Title: string | null, Feature4Description: string | null, Feature4Icon: string | null, descriptionText: string | null };

export type SsMobileBankingBlockFragment = { __typename?: 'SSMobileBankingBlock', Heading: string | null, Feature1Title: string | null, Feature2Title: string | null, Feature3Title: string | null, Feature4Title: string | null, CTAText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, Image: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, feature1Description: { __typename?: 'RichText', html: string | null } | null, CTALink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

type ItemsInContentArea_ArticleGroupPage_Fragment = { __typename: 'ArticleGroupPage' };

type ItemsInContentArea_ArticleListElement_Fragment = { __typename: 'ArticleListElement' };

type ItemsInContentArea_ArticlePage_Fragment = { __typename: 'ArticlePage' };

type ItemsInContentArea_AvailabilityBlock_Fragment = { __typename: 'AvailabilityBlock' };

type ItemsInContentArea_BannerBlock_Fragment = { __typename: 'BannerBlock' };

type ItemsInContentArea_BlankExperience_Fragment = { __typename: 'BlankExperience' };

type ItemsInContentArea_BlankSection_Fragment = { __typename: 'BlankSection' };

type ItemsInContentArea_BlockImage_Fragment = { __typename: 'BlockImage', _id: string | null, _json: any | null, _metadata:
    | { __typename?: 'ContentMetadata', displayName: string | null }
    | { __typename?: 'InstanceMetadata', displayName: string | null }
    | { __typename?: 'ItemMetadata', displayName: string | null }
    | { __typename?: 'MediaMetadata', displayName: string | null }
   | null };

type ItemsInContentArea_ButtonBlock_Fragment = { __typename: 'ButtonBlock' };

type ItemsInContentArea_CmsPage_Fragment = { __typename: 'CMSPage' };

type ItemsInContentArea_CtaElement_Fragment = { __typename: 'CTAElement' };

type ItemsInContentArea_CtaSectionBlock_Fragment = { __typename: 'CTASectionBlock', Heading: string | null, PrimaryButtonText: string | null, SecondaryButtonText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, BackgroundImage: { __typename?: 'ContentUrl', default: string | null } | null, PrimaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, SecondaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

type ItemsInContentArea_CardBlock_Fragment = { __typename: 'CardBlock' };

type ItemsInContentArea_ContactBlock_Fragment = { __typename: 'ContactBlock' };

type ItemsInContentArea_DefaultImage_Fragment = { __typename: 'DefaultImage' };

type ItemsInContentArea_DefaultVideo_Fragment = { __typename: 'DefaultVideo' };

type ItemsInContentArea_Dictionary_Fragment = { __typename: 'Dictionary' };

type ItemsInContentArea_DictionaryItem_Fragment = { __typename: 'DictionaryItem' };

type ItemsInContentArea_Footer_Fragment = { __typename: 'Footer' };

type ItemsInContentArea_FooterColumn_Fragment = { __typename: 'FooterColumn' };

type ItemsInContentArea_GenericMedia_Fragment = { __typename: 'GenericMedia' };

type ItemsInContentArea_GenericMedia123_Fragment = { __typename: 'GenericMedia123' };

type ItemsInContentArea_Header_Fragment = { __typename: 'Header' };

type ItemsInContentArea_HeaderBlock_Fragment = { __typename: 'HeaderBlock' };

type ItemsInContentArea_HeadingElement_Fragment = { __typename: 'HeadingElement' };

type ItemsInContentArea_HeroBlock_Fragment = { __typename: 'HeroBlock' };

type ItemsInContentArea_Image_Fragment = { __typename: 'Image' };

type ItemsInContentArea_ImageElement_Fragment = { __typename: 'ImageElement' };

type ItemsInContentArea_ImageMedia_Fragment = { __typename: 'ImageMedia' };

type ItemsInContentArea_LogoItemBlock_Fragment = { __typename: 'LogoItemBlock' };

type ItemsInContentArea_LogosBlock_Fragment = { __typename: 'LogosBlock' };

type ItemsInContentArea_MegaMenuGroupBlock_Fragment = { __typename: 'MegaMenuGroupBlock' };

type ItemsInContentArea_NavItem_Fragment = { __typename: 'NavItem' };

type ItemsInContentArea_NavigationMenuBlock_Fragment = { __typename: 'NavigationMenuBlock' };

type ItemsInContentArea_OfficeLocation_Fragment = { __typename: 'OfficeLocation' };

type ItemsInContentArea_Page_Fragment = { __typename: 'Page' };

type ItemsInContentArea_PageSeoSettings_Fragment = { __typename: 'PageSeoSettings' };

type ItemsInContentArea_ParagraphElement_Fragment = { __typename: 'ParagraphElement' };

type ItemsInContentArea_PortfolioGridBlock_Fragment = { __typename: 'PortfolioGridBlock' };

type ItemsInContentArea_PortfolioItemBlock_Fragment = { __typename: 'PortfolioItemBlock' };

type ItemsInContentArea_ProfileBlock_Fragment = { __typename: 'ProfileBlock' };

type ItemsInContentArea_SeoExperience_Fragment = { __typename: 'SEOExperience' };

type ItemsInContentArea_SsFeatures_Fragment = { __typename: 'SSFeatures', Heading: string | null, Feature1Title: string | null, Feature1Description: string | null, Feature1Icon: string | null, Feature2Title: string | null, Feature2Description: string | null, Feature2Icon: string | null, Feature3Title: string | null, Feature3Description: string | null, Feature3Icon: string | null, Feature4Title: string | null, Feature4Description: string | null, Feature4Icon: string | null, descriptionText: string | null };

type ItemsInContentArea_SsHeroBlock_Fragment = { __typename: 'SSHeroBlock', Heading: string | null, PrimaryButtonText: string | null, SecondaryButtonText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, PrimaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, SecondaryButtonLink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, ImageURL: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

type ItemsInContentArea_SsImageBlock_Fragment = { __typename: 'SSImageBlock' };

type ItemsInContentArea_SsMobileBankingBlock_Fragment = { __typename: 'SSMobileBankingBlock', Heading: string | null, Feature1Title: string | null, Feature2Title: string | null, Feature3Title: string | null, Feature4Title: string | null, CTAText: string | null, Description: { __typename?: 'RichText', html: string | null } | null, Image: { __typename?: 'ContentReference', url: { __typename?: 'ContentUrl', default: string | null } | null } | null, feature1Description: { __typename?: 'RichText', html: string | null } | null, CTALink: { __typename?: 'Link', url: { __typename?: 'ContentUrl', default: string | null } | null } | null };

type ItemsInContentArea_SsTextBlock_Fragment = { __typename: 'SSTextBlock', _id: string | null, Heading: string | null, Body: { __typename?: 'RichText', html: string | null } | null };

type ItemsInContentArea_ServiceItem_Fragment = { __typename: 'ServiceItem' };

type ItemsInContentArea_ServicesBlock_Fragment = { __typename: 'ServicesBlock' };

type ItemsInContentArea_SocialLink_Fragment = { __typename: 'SocialLink' };

type ItemsInContentArea_SouthStateImageBlock_Fragment = { __typename: 'SouthStateImageBlock' };

type ItemsInContentArea_StartPage_Fragment = { __typename: 'StartPage' };

type ItemsInContentArea_StoryBlock_Fragment = { __typename: 'StoryBlock' };

type ItemsInContentArea_SysContentFolder_Fragment = { __typename: 'SysContentFolder' };

type ItemsInContentArea_TestimonialElement_Fragment = { __typename: 'TestimonialElement' };

type ItemsInContentArea_TestimonialItem_Fragment = { __typename: 'TestimonialItem' };

type ItemsInContentArea_TestimonialItemBlock_Fragment = { __typename: 'TestimonialItemBlock' };

type ItemsInContentArea_TestimonialsBlock_Fragment = { __typename: 'TestimonialsBlock' };

type ItemsInContentArea_Video_Fragment = { __typename: 'Video' };

type ItemsInContentArea_VideoMedia_Fragment = { __typename: 'VideoMedia' };

type ItemsInContentArea_WebsiteFooter_Fragment = { __typename: 'WebsiteFooter' };

type ItemsInContentArea__Component_Fragment = { __typename: '_Component' };

type ItemsInContentArea__Content_Fragment = { __typename: '_Content' };

type ItemsInContentArea__Experience_Fragment = { __typename: '_Experience' };

type ItemsInContentArea__Folder_Fragment = { __typename: '_Folder' };

type ItemsInContentArea__Image_Fragment = { __typename: '_Image' };

type ItemsInContentArea__Media_Fragment = { __typename: '_Media' };

type ItemsInContentArea__Page_Fragment = { __typename: '_Page' };

type ItemsInContentArea__Section_Fragment = { __typename: '_Section' };

type ItemsInContentArea__Video_Fragment = { __typename: '_Video' };

export type ItemsInContentAreaFragment =
  | ItemsInContentArea_ArticleGroupPage_Fragment
  | ItemsInContentArea_ArticleListElement_Fragment
  | ItemsInContentArea_ArticlePage_Fragment
  | ItemsInContentArea_AvailabilityBlock_Fragment
  | ItemsInContentArea_BannerBlock_Fragment
  | ItemsInContentArea_BlankExperience_Fragment
  | ItemsInContentArea_BlankSection_Fragment
  | ItemsInContentArea_BlockImage_Fragment
  | ItemsInContentArea_ButtonBlock_Fragment
  | ItemsInContentArea_CmsPage_Fragment
  | ItemsInContentArea_CtaElement_Fragment
  | ItemsInContentArea_CtaSectionBlock_Fragment
  | ItemsInContentArea_CardBlock_Fragment
  | ItemsInContentArea_ContactBlock_Fragment
  | ItemsInContentArea_DefaultImage_Fragment
  | ItemsInContentArea_DefaultVideo_Fragment
  | ItemsInContentArea_Dictionary_Fragment
  | ItemsInContentArea_DictionaryItem_Fragment
  | ItemsInContentArea_Footer_Fragment
  | ItemsInContentArea_FooterColumn_Fragment
  | ItemsInContentArea_GenericMedia_Fragment
  | ItemsInContentArea_GenericMedia123_Fragment
  | ItemsInContentArea_Header_Fragment
  | ItemsInContentArea_HeaderBlock_Fragment
  | ItemsInContentArea_HeadingElement_Fragment
  | ItemsInContentArea_HeroBlock_Fragment
  | ItemsInContentArea_Image_Fragment
  | ItemsInContentArea_ImageElement_Fragment
  | ItemsInContentArea_ImageMedia_Fragment
  | ItemsInContentArea_LogoItemBlock_Fragment
  | ItemsInContentArea_LogosBlock_Fragment
  | ItemsInContentArea_MegaMenuGroupBlock_Fragment
  | ItemsInContentArea_NavItem_Fragment
  | ItemsInContentArea_NavigationMenuBlock_Fragment
  | ItemsInContentArea_OfficeLocation_Fragment
  | ItemsInContentArea_Page_Fragment
  | ItemsInContentArea_PageSeoSettings_Fragment
  | ItemsInContentArea_ParagraphElement_Fragment
  | ItemsInContentArea_PortfolioGridBlock_Fragment
  | ItemsInContentArea_PortfolioItemBlock_Fragment
  | ItemsInContentArea_ProfileBlock_Fragment
  | ItemsInContentArea_SeoExperience_Fragment
  | ItemsInContentArea_SsFeatures_Fragment
  | ItemsInContentArea_SsHeroBlock_Fragment
  | ItemsInContentArea_SsImageBlock_Fragment
  | ItemsInContentArea_SsMobileBankingBlock_Fragment
  | ItemsInContentArea_SsTextBlock_Fragment
  | ItemsInContentArea_ServiceItem_Fragment
  | ItemsInContentArea_ServicesBlock_Fragment
  | ItemsInContentArea_SocialLink_Fragment
  | ItemsInContentArea_SouthStateImageBlock_Fragment
  | ItemsInContentArea_StartPage_Fragment
  | ItemsInContentArea_StoryBlock_Fragment
  | ItemsInContentArea_SysContentFolder_Fragment
  | ItemsInContentArea_TestimonialElement_Fragment
  | ItemsInContentArea_TestimonialItem_Fragment
  | ItemsInContentArea_TestimonialItemBlock_Fragment
  | ItemsInContentArea_TestimonialsBlock_Fragment
  | ItemsInContentArea_Video_Fragment
  | ItemsInContentArea_VideoMedia_Fragment
  | ItemsInContentArea_WebsiteFooter_Fragment
  | ItemsInContentArea__Component_Fragment
  | ItemsInContentArea__Content_Fragment
  | ItemsInContentArea__Experience_Fragment
  | ItemsInContentArea__Folder_Fragment
  | ItemsInContentArea__Image_Fragment
  | ItemsInContentArea__Media_Fragment
  | ItemsInContentArea__Page_Fragment
  | ItemsInContentArea__Section_Fragment
  | ItemsInContentArea__Video_Fragment
;

export const SsHeroBlockFragmentFragmentDoc = gql`
    fragment SSHeroBlockFragment on SSHeroBlock {
  Heading
  Description {
    html
  }
  PrimaryButtonText
  PrimaryButtonLink {
    url {
      default
    }
  }
  SecondaryButtonText
  SecondaryButtonLink {
    url {
      default
    }
  }
  ImageURL {
    url {
      default
    }
  }
}
    `;
export const SsTextBlockFragmentFragmentDoc = gql`
    fragment SSTextBlockFragment on SSTextBlock {
  __typename
  _id
  Heading
  Body {
    html
  }
}
    `;
export const SsFeaturesFragmentFragmentDoc = gql`
    fragment SSFeaturesFragment on SSFeatures {
  Heading
  descriptionText: Description
  Feature1Title
  Feature1Description
  Feature1Icon
  Feature2Title
  Feature2Description
  Feature2Icon
  Feature3Title
  Feature3Description
  Feature3Icon
  Feature4Title
  Feature4Description
  Feature4Icon
}
    `;
export const BlockImageFragmentFragmentDoc = gql`
    fragment BlockImageFragment on BlockImage {
  __typename
  _id
  _metadata {
    displayName
  }
  _json
}
    `;
export const CtaSectionFragmentFragmentDoc = gql`
    fragment CTASectionFragment on CTASectionBlock {
  Heading
  Description {
    html
  }
  BackgroundImage {
    default
  }
  PrimaryButtonText
  PrimaryButtonLink {
    url {
      default
    }
  }
  SecondaryButtonText
  SecondaryButtonLink {
    url {
      default
    }
  }
}
    `;
export const SsMobileBankingBlockFragmentDoc = gql`
    fragment SSMobileBankingBlock on SSMobileBankingBlock {
  Heading
  Description {
    html
  }
  Image {
    url {
      default
    }
  }
  Feature1Title
  feature1Description: Feature1Description {
    html
  }
  Feature2Title
  Feature3Title
  Feature4Title
  CTAText
  CTALink {
    url {
      default
    }
  }
}
    `;
export const ItemsInContentAreaFragmentDoc = gql`
    fragment ItemsInContentArea on _IContent {
  __typename
  ... on SSHeroBlock {
    ...SSHeroBlockFragment
  }
  ... on SSTextBlock {
    ...SSTextBlockFragment
  }
  ... on SSFeatures {
    ...SSFeaturesFragment
  }
  ... on BlockImage {
    ...BlockImageFragment
  }
  ... on CTASectionBlock {
    ...CTASectionFragment
  }
  ... on SSMobileBankingBlock {
    ...SSMobileBankingBlock
  }
}
    ${SsHeroBlockFragmentFragmentDoc}
${SsTextBlockFragmentFragmentDoc}
${SsFeaturesFragmentFragmentDoc}
${BlockImageFragmentFragmentDoc}
${CtaSectionFragmentFragmentDoc}
${SsMobileBankingBlockFragmentDoc}`;
export const GetHomePageDocument = gql`
    query GetHomePage {
  Page {
    items {
      Title
      _metadata {
        displayName
        url {
          hierarchical
        }
      }
      Blocks {
        __typename
        ...ItemsInContentArea
      }
    }
  }
}
    ${ItemsInContentAreaFragmentDoc}`;
export type Requester<C = {}, E = unknown> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<ExecutionResult<R, E>> | AsyncIterable<ExecutionResult<R, E>>
export function getSdk<C, E>(requester: Requester<C, E>) {
  return {
    GetHomePage(variables?: GetHomePageQueryVariables, options?: C): Promise<ExecutionResult<GetHomePageQuery, E>> {
      return requester<GetHomePageQuery, GetHomePageQueryVariables>(GetHomePageDocument, variables, options) as Promise<ExecutionResult<GetHomePageQuery, E>>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;