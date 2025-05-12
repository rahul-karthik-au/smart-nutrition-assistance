/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    id
    email
    userId
    firstname
    lastname
    age
    gender
    activityLevel
    height
    weight
    fitnessGoals
    targetCalorie
    customeGoals
    dietaryPreference
    foodAllergies
    additionalNotes
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      userId
      firstname
      lastname
      age
      gender
      activityLevel
      height
      weight
      fitnessGoals
      targetCalorie
      customeGoals
      dietaryPreference
      foodAllergies
      additionalNotes
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const getFood = /* GraphQL */ `query GetFood($id: ID!) {
  getFood(id: $id) {
    id
    email
    userId
    foodname
    calorie
    protein
    carbs
    fats
    vitaminc
    iron
    calcium
    potassium
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFoodQueryVariables, APITypes.GetFoodQuery>;
export const listFoods = /* GraphQL */ `query ListFoods(
  $filter: ModelFoodFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoods(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      userId
      foodname
      calorie
      protein
      carbs
      fats
      vitaminc
      iron
      calcium
      potassium
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFoodsQueryVariables, APITypes.ListFoodsQuery>;
