/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onCreateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onUpdateUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
) {
  onDeleteUserProfile(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onCreateFood = /* GraphQL */ `subscription OnCreateFood($filter: ModelSubscriptionFoodFilterInput) {
  onCreateFood(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFoodSubscriptionVariables,
  APITypes.OnCreateFoodSubscription
>;
export const onUpdateFood = /* GraphQL */ `subscription OnUpdateFood($filter: ModelSubscriptionFoodFilterInput) {
  onUpdateFood(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFoodSubscriptionVariables,
  APITypes.OnUpdateFoodSubscription
>;
export const onDeleteFood = /* GraphQL */ `subscription OnDeleteFood($filter: ModelSubscriptionFoodFilterInput) {
  onDeleteFood(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFoodSubscriptionVariables,
  APITypes.OnDeleteFoodSubscription
>;
