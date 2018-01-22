export function handleErrors(response) {
  const formatError = response.type +  " " + response.status + " " + response.statusText;

  if (!response.ok) {
    throw Error(formatError);
  }
    return response;
}
