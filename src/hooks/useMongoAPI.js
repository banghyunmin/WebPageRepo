const N8N_BASE = "https://www.hmbang.xyz/webhook";

export async function fetchCollectionList() {
  const res = await fetch(`${N8N_BASE}/mongo-viewer`);
  return await res.json(); // ["users", "orders", "logs"]
}

export async function fetchDocuments(collection) {
  const res = await fetch(`${N8N_BASE}/a6454286-a016-4014-89d1-f3a29b6fa6b9/mongo-viewer/${collection}`);
  return await res.json(); // [{ _id: ..., name: ..., age: ... }, ...]
}

export async function insertDocument(collection, document) {
  const res = await fetch(`${N8N_BASE}/a6454286-a016-4014-89d1-f3a29b6fa6b9/mongo-viewer/${collection}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(document),
  });
  return await res.json();
}

export async function updateDocument(collection, id, updateData) {
  const res = await fetch(`${N8N_BASE}/a6454286-a016-4014-89d1-f3a29b6fa6b9/mongo-viewer/${collection}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  });
  return await res.json();
}

export async function deleteDocument(collection, id) {
  const res = await fetch(`$https://www.hmbang.xyz/webhook-test/a6454286-a016-4014-89d1-f3a29b6fa6b9/mongo-viewer/${collection}/${id}`, {
    method: 'GET',
  });

  if (!res.ok) throw new Error("삭제 실패");

  const text = await res.text();

  // 응답이 JSON일 경우에만 파싱
  try {
    return text ? JSON.parse(text) : {};
  } catch (e) {
    console.warn("JSON 응답 아님:", text);
    return {};
  }
}