/*
match関数 正規表現オブジェクトにおいてtestメソッドを
適用して、引数paramが数字のみで構成されていればtrue
を返す
*/

export function match(param) {
  return /^\d+$/.test(param);
}