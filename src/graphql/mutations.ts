/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const callSampleFunction = /* GraphQL */ `mutation CallSampleFunction($input: String) {
  callSampleFunction(input: $input)
}
` as GeneratedMutation<
  APITypes.CallSampleFunctionMutationVariables,
  APITypes.CallSampleFunctionMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $input: CreateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  createUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $input: UpdateUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  updateUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $input: DeleteUserProfileInput!
  $condition: ModelUserProfileConditionInput
) {
  deleteUserProfile(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const createFood = /* GraphQL */ `mutation CreateFood(
  $input: CreateFoodInput!
  $condition: ModelFoodConditionInput
) {
  createFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFoodMutationVariables,
  APITypes.CreateFoodMutation
>;
export const updateFood = /* GraphQL */ `mutation UpdateFood(
  $input: UpdateFoodInput!
  $condition: ModelFoodConditionInput
) {
  updateFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFoodMutationVariables,
  APITypes.UpdateFoodMutation
>;
export const deleteFood = /* GraphQL */ `mutation DeleteFood(
  $input: DeleteFoodInput!
  $condition: ModelFoodConditionInput
) {
  deleteFood(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFoodMutationVariables,
  APITypes.DeleteFoodMutation
>;
