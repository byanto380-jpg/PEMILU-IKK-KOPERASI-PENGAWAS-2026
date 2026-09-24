const candidates=[
 {id:1,name:"Budi Santoso",initial:"BS",bio:"Pengalaman 8 tahun dalam kepengurusan koperasi.",vision:"Koperasi sehat, anggota kuat."},
 {id:2,name:"Siti Rahmawati",initial:"SR",bio:"Pengalaman di bidang keuangan dan pelayanan anggota.",vision:"Pelayanan cepat, transparansi meningkat."},
 {id:3,name:"Ahmad Fauzi",initial:"AF",bio:"Aktif dalam pengembangan usaha dan kemitraan koperasi.",vision:"Usaha berkembang, manfaat anggota bertambah."}
];
let verified=false, voter=null;
function renderCandidates(){
 document.getElementById("candidateGrid").innerHTML=candidates.map(c=>`<article class="candidate"><div class="avatar">${c.initial}</div><span class="tag">Calon ${c.id}</span><h3>${c.name}</h3><p>${c.bio}</p><strong>Visi:</strong><p>${c.vision}</p></article>`).join("");
 document.getElementById("candidateChoices").innerHTML=candidates.map(c=>`<label class="choice"><input type="radio" name="candidate" value="${c.id}"><span><b>${c.id}. ${c.name}</b><br><small>${c.vision}</small></span></label>`).join("");
}
function verifyVoter(){
 const id=document.getElementById("memberId").value.trim(), pin=document.getElementById("pin").value.trim();
 const msg=document.getElementById("verifyMsg");
 if(id==="KOP-0001"&&pin==="123456"){verified=true;voter={id,name:"Anggota Demo"};document.getElementById("voterName").textContent=voter.name+" · "+voter.id;document.getElementById("ballot").classList.remove("disabled");msg.textContent="✓ Verifikasi berhasil. Silakan pilih satu calon.";msg.style.color="#087f5b";}
 else{msg.textContent="Nomor anggota atau PIN tidak sesuai.";msg.style.color="#c92a2a";}
}
function submitVote(){
 if(!verified)return;
 const selected=document.querySelector('input[name="candidate"]:checked'), msg=document.getElementById("voteMsg");
 if(!selected){msg.textContent="Silakan pilih satu calon.";return}
 const used=JSON.parse(localStorage.getItem("votedMembers")||"[]");
 if(used.includes(voter.id)){msg.textContent="Anggota ini sudah memberikan suara pada perangkat ini.";msg.style.color="#c92a2a";return}
 let votes=JSON.parse(localStorage.getItem("demoVotes")||"{}");votes[selected.value]=(votes[selected.value]||0)+1;
 localStorage.setItem("demoVotes",JSON.stringify(votes));used.push(voter.id);localStorage.setItem("votedMembers",JSON.stringify(used));
 msg.textContent="✓ Suara tersimpan dalam mode demo.";msg.style.color="#087f5b";renderResults();
}
function renderResults(){
 const votes=JSON.parse(localStorage.getItem("demoVotes")||"{}"), total=Object.values(votes).reduce((a,b)=>a+b,0);
 document.getElementById("results").innerHTML=candidates.map(c=>{const n=votes[c.id]||0,p=total?Math.round(n/total*100):0;return `<div class="bar-row"><div class="bar-meta"><span>${c.name}</span><span>${n} suara · ${p}%</span></div><div class="bar"><i style="width:${p}%"></i></div></div>`}).join("")+`<p style="color:#627d98;font-size:13px">Total suara demo: <b>${total}</b></p>`;
}
renderCandidates();renderResults();