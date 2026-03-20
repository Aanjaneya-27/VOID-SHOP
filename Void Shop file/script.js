// All Items
var TSHIRTS=[
  {id:'t1',cat:'Signature',name:'Vöid Cotton Tee',       price:'₹ 28,500',raw:28500,img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=80'},
  {id:'t2',cat:'Drop 01',  name:'Deconstructed Henley',  price:'₹ 38,900',raw:38900,img:'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=700&q=80'},
  {id:'t3',cat:'Archive',  name:'Slashed Crewneck',      price:'₹ 32,800',raw:32800,img:'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=700&q=80'},
  {id:'t4',cat:'New',      name:'Raw Edge Long Tee',     price:'₹ 41,200',raw:41200,img:'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=700&q=80'},
  {id:'t5',cat:'Capsule',  name:'Distressed Band Tee',   price:'₹ 35,600',raw:35600,img:'https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?w=700&q=80'},
  {id:'t6',cat:'Signature',name:'Oversized Pocket Tee',  price:'₹ 26,900',raw:26900,img:'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=700&q=80'},
];
var TROUSERS=[
  {id:'p1',cat:'Atelier', name:'Raw Hem Trouser',   price:'₹ 58,500',raw:58500,img:'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&q=80'},
  {id:'p2',cat:'Capsule', name:'Wide Pleated Pant', price:'₹ 48,600',raw:48600,img:'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=700&q=80'},
  {id:'p3',cat:'Season',  name:'Cargo Utility Pant',price:'₹ 43,400',raw:43400,img:'https://images.unsplash.com/photo-1542272604-787c3835535d?w=700&q=80'},
  {id:'p4',cat:'New',     name:'Slim Wool Trouser', price:'₹ 62,000',raw:62000,img:'https://images.unsplash.com/photo-1602810319428-019690571b5b?w=700&q=80'},
  {id:'p5',cat:'Archive', name:'Linen Drawstring',  price:'₹ 37,800',raw:37800,img:'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=700&q=80'},
  {id:'p6',cat:'Capsule', name:'Pleated Chino',     price:'₹ 44,500',raw:44500,img:'https://images.unsplash.com/photo-1560243563-062bfc001d68?w=700&q=80'},
];
var FOOTWEAR=[
  {id:'s1',cat:'Couture',  name:'Destroyed Oxford',price:'₹ 89,900',raw:89900,img:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=700&q=80'},
  {id:'s2',cat:'Signature',name:'Platform Derby',  price:'₹ 73,500',raw:73500,img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80'},
  {id:'s3',cat:'Drop 02',  name:'Chelsea Mule',    price:'₹ 65,800',raw:65800,img:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=700&q=80'},
  {id:'s4',cat:'New',      name:'Suede Loafer',    price:'₹ 58,400',raw:58400,img:'https://images.unsplash.com/photo-1478186012737-22be3b028bc7?w=700&q=80'},
  {id:'s5',cat:'Archive',  name:'Monk Strap',      price:'₹ 82,000',raw:82000,img:'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=700&q=80'},
  {id:'s6',cat:'Capsule',  name:'High-Top Canvas', price:'₹ 47,600',raw:47600,img:'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=700&q=80'},
];
var DROPS=[];
[TSHIRTS[0],TSHIRTS[1],TROUSERS[0],TROUSERS[1],FOOTWEAR[0],FOOTWEAR[1]].forEach(function(x){
  DROPS.push(Object.assign({},x,{cat:'New Drop',id:'d'+x.id}));
});
var COLLS=[
  {id:'void-season', tag:'SS 2026',    name:'VOID SEASON',    desc:'The debut season',       count:'24 Pieces', num:'01',img:'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',products:TSHIRTS.slice(0,2).concat(TROUSERS.slice(0,2),FOOTWEAR.slice(0,2))},
  {id:'dark-archive',tag:'Archive',    name:'DARK ARCHIVE',   desc:'Discontinued & rare',    count:'18 Pieces', num:'02',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',products:TSHIRTS.slice(2,4).concat(TROUSERS.slice(2,4),FOOTWEAR.slice(2,4))},
  {id:'minimal-form',tag:'Capsule',    name:'MINIMAL FORM',   desc:'Clean lines, raw edges', count:'12 Pieces', num:'03',img:'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=800&q=80',products:TSHIRTS.slice(4,6).concat(TROUSERS.slice(4,6),FOOTWEAR.slice(4,6))},
  {id:'tokyo-noir',  tag:'Collab',     name:'TOKYO NOIR',     desc:'Japan exclusive drop',   count:'10 Pieces', num:'04',img:'https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80',products:[TSHIRTS[0],TSHIRTS[3],TROUSERS[0],TROUSERS[3],FOOTWEAR[0],FOOTWEAR[3]]},
  {id:'raw-construct',tag:'FW 2025',   name:'RAW CONSTRUCT',  desc:'Autumn/Winter season',   count:'20 Pieces', num:'05',img:'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',products:[TSHIRTS[1],TSHIRTS[2],TROUSERS[1],TROUSERS[2],FOOTWEAR[1],FOOTWEAR[2]]},
  {id:'signature',   tag:'Signature',  name:'SIGNATURE EDIT', desc:'Core permanent line',    count:'16 Pieces', num:'06',img:'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',products:TSHIRTS.slice(0,3).concat(TROUSERS.slice(0,2),[FOOTWEAR[0]])},
];
var TICKS=['T-Shirts','Trousers','Footwear','New Drop','Deconstructed','Collections','Mumbai','Delhi','Bangalore'];

// States

var bag=[];
var wishlist=[];      
var currentUser=null;
var currentPage='home';
var locoInst={};
var isMobile=window.innerWidth<=768;
var qvCurrentPid=null;   
var qvSelectedSize=null;

/* Product metadata for view */
var PROD_META={
  t:{ material:'100% Organic Cotton', fit:'Oversized', origin:'Made in India', sizes:['XS','S','M','L','XL','XXL'] },
  p:{ material:'Wool & Linen Blend',  fit:'Wide Leg',  origin:'Atelier Crafted', sizes:['28','30','32','34','36','38'] },
  s:{ material:'Full Grain Leather',  fit:'Standard',  origin:'Handmade in Agra', sizes:['6','7','8','9','10','11'] },
  d:{ material:'Mixed',               fit:'Varies',    origin:'Various', sizes:['XS','S','M','L','XL'] },
};
var PROD_DESCS=[
  'A meticulously constructed piece that blurs the boundary between utility and art. Sourced from deadstock fabrics, this is limited by design.',
  'Raw intention meets refined execution. The silhouette challenges conventional tailoring while remaining entirely wearable.',
  'Built for those who understand that restraint is the highest form of expression. Each stitch placed with deliberate purpose.',
  'Inspired by the negative space between movements. This piece is about what is left out as much as what remains.',
];
function getDesc(id){ var h=0;for(var i=0;i<id.length;i++)h=(h*31+id.charCodeAt(i))%PROD_DESCS.length;return PROD_DESCS[h]; }
function getMeta(id){ var k=id[0];return PROD_META[k]||PROD_META.t; }

// Helpers
function fmtINR(n){return '₹ '+n.toLocaleString('en-IN');}
function initials(name){var p=name.trim().split(' ');return(p[0][0]+(p[1]?p[1][0]:'')).toUpperCase();}


  //  RENDER
function renderTicker(id){
  var el=document.getElementById(id);
  if(!el)return;
  var items=TICKS.concat(TICKS);
  el.innerHTML=items.map(function(t){return'<span class="ticker-item">'+t+'<span class="ticker-dot">✕</span></span>';}).join('');
}

function renderPCard(p){
  var wished=wishlist.indexOf(p.id)>-1;
  return '<div class="pcard" data-pid="'+p.id+'">'
    +'<div class="pcard-bar"><span class="pcard-bar-label">'+p.cat+'</span></div>'
    +'<div class="pcard-inner" data-qv="'+p.id+'">'
    +'<img src="'+p.img+'" alt="'+p.name+'" loading="lazy"/>'
    +'<button class="pcard-add" data-pid="'+p.id+'" title="Add to bag">+</button>'
    +'</div>'
    +'<button class="pcard-wish'+(wished?' wished':'')+'" data-wid="'+p.id+'" title="Save to wishlist">'
    +'<svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke-width="2" stroke="currentColor" fill="'+(wished?'currentColor':'none')+'"/></svg>'
    +'</button>'
    +'<div class="pcard-info">'
    +'<div class="pcard-cat">'+p.cat+'</div>'
    +'<div class="pcard-name">'+p.name+'</div>'
    +'<div class="pcard-price">'+p.price+'</div>'
    +'</div></div>';
}

function renderCollCard(c){
  return '<div class="coll-card" data-coll="'+c.id+'">'
    +'<img src="'+c.img+'" alt="'+c.name+'" loading="lazy"/>'
    +'<div class="coll-over">'
    +'<div class="coll-tag">'+c.tag+'</div>'
    +'<div class="coll-name">'+c.name+'</div>'
    +'<div class="coll-count">'+c.count+'</div>'
    +'</div><div class="coll-arrow">→</div></div>';
}

function populateAll(){
  renderTicker('t1');renderTicker('t2');renderTicker('t3');

  var hcg=document.getElementById('homeCollGrid');
  if(hcg)hcg.innerHTML=COLLS.slice(0,3).map(renderCollCard).join('');
  var fcg=document.getElementById('fullCollGrid');
  if(fcg)fcg.innerHTML=COLLS.map(renderCollCard).join('');

  var ht=document.getElementById('homeTshirts');
  var htr=document.getElementById('homeTrousers');
  var hfw=document.getElementById('homeFootwear');
  if(ht)ht.innerHTML=TSHIRTS.slice(0,3).map(renderPCard).join('');
  if(htr)htr.innerHTML=TROUSERS.slice(0,3).map(renderPCard).join('');
  if(hfw)hfw.innerHTML=FOOTWEAR.slice(0,3).map(renderPCard).join('');

  var ft=document.getElementById('fullTshirts');
  var ftr=document.getElementById('fullTrousers');
  var ff=document.getElementById('fullFootwear');
  var fd=document.getElementById('fullDrops');
  if(ft)ft.innerHTML=TSHIRTS.map(renderPCard).join('');
  if(ftr)ftr.innerHTML=TROUSERS.map(renderPCard).join('');
  if(ff)ff.innerHTML=FOOTWEAR.map(renderPCard).join('');
  if(fd)fd.innerHTML=DROPS.map(renderPCard).join('');
}

// Bag

function findProduct(id){
  var all=TSHIRTS.concat(TROUSERS,FOOTWEAR,DROPS);
  for(var i=0;i<all.length;i++){if(all[i].id===id||'d'+all[i].id===id||all[i].id.replace(/^d/,'')===id.replace(/^d/,''))return all[i];}
  for(var i=0;i<all.length;i++){if(all[i].id===id)return all[i];}
  return null;
}

function addToBag(pid){
  var all=TSHIRTS.concat(TROUSERS,FOOTWEAR,DROPS);
  var prod=null;
  for(var i=0;i<all.length;i++){if(all[i].id===pid){prod=all[i];break;}}
  if(!prod)return;
  var found=false;
  for(var i=0;i<bag.length;i++){
    if(bag[i].product.id===pid){bag[i].qty++;found=true;break;}
  }
  if(!found)bag.push({product:prod,qty:1});
  updateBagUI();
  showToast('<span class="t-red">+</span> '+prod.name+' added to bag');
  animBagCount();
}

function removeFromBag(pid){
  bag=bag.filter(function(b){return b.product.id!==pid;});
  updateBagUI();
}

function changeQty(pid,delta){
  for(var i=0;i<bag.length;i++){
    if(bag[i].product.id===pid){
      bag[i].qty+=delta;
      if(bag[i].qty<=0)bag.splice(i,1);
      break;
    }
  }
  updateBagUI();
}

function updateBagUI(){
  var total=bag.reduce(function(s,b){return s+b.qty;},0);
  var countEl=document.getElementById('bagCount');
  if(countEl)countEl.textContent=total;

  var headCount=document.getElementById('bagHeadCount');
  if(headCount)headCount.textContent=total+' item'+(total!==1?'s':'');

  var itemsEl=document.getElementById('bagItems');
  var footEl=document.getElementById('bagFoot');

  if(total===0){
    if(itemsEl)itemsEl.innerHTML='<div class="bag-empty"><div class="bag-empty-icon">◻</div><div class="bag-empty-txt">Your bag is empty</div><div class="bag-empty-sub">Add pieces from the collection to get started.</div></div>';
    if(footEl)footEl.style.display='none';
  } else {
    var html='';
    bag.forEach(function(b){
      html+='<div class="bag-item">'
        +'<img src="'+b.product.img+'" alt="'+b.product.name+'"/>'
        +'<div class="bag-item-info">'
        +'<div class="bag-item-cat">'+b.product.cat+'</div>'
        +'<div class="bag-item-name">'+b.product.name+'</div>'
        +'<div class="bag-item-price">'+b.product.price+'</div>'
        +'<div class="bag-item-qty">'
        +'<button class="qty-btn" data-qid="'+b.product.id+'" data-delta="-1">−</button>'
        +'<span class="qty-num">'+b.qty+'</span>'
        +'<button class="qty-btn" data-qid="'+b.product.id+'" data-delta="1">+</button>'
        +'</div></div>'
        +'<button class="bag-item-del" data-del="'+b.product.id+'">✕</button>'
        +'</div>';
    });
    if(itemsEl)itemsEl.innerHTML=html;

    var subtotal=bag.reduce(function(s,b){return s+b.product.raw*b.qty;},0);
    var totalEl=document.getElementById('bagTotal');
    if(totalEl)totalEl.textContent=fmtINR(subtotal);
    if(footEl)footEl.style.display='block';
  }
}

function openBag(){
  document.getElementById('bag-overlay').classList.add('open');
  document.getElementById('bag-drawer').classList.add('open');
  document.body.style.overflow='hidden';
}

function closeBag(){
  document.getElementById('bag-overlay').classList.remove('open');
  document.getElementById('bag-drawer').classList.remove('open');
  document.body.style.overflow='';
}

function animBagCount(){
  var el=document.getElementById('bagCount');
  if(!el)return;
  el.classList.add('bump');
  setTimeout(function(){el.classList.remove('bump');},300);
}


  //  WISHLIST

function toggleWishlist(pid){
  var idx=wishlist.indexOf(pid);
  if(idx>-1){ wishlist.splice(idx,1); }
  else { wishlist.push(pid); }
  updateWishUI();
  // Update all rendered heart buttons for this pid
  document.querySelectorAll('.pcard-wish[data-wid="'+pid+'"]').forEach(function(btn){
    var isWished=wishlist.indexOf(pid)>-1;
    btn.classList.toggle('wished',isWished);
    btn.querySelector('path').setAttribute('fill',isWished?'currentColor':'none');
    btn.classList.add('pop');
    setTimeout(function(){btn.classList.remove('pop');},350);
  });
  showToast(wishlist.indexOf(pid)>-1 ? '♡ Saved to wishlist' : '♡ Removed from wishlist');
}

function updateWishUI(){
  var count=wishlist.length;
  var badge=document.getElementById('wishBadge');
  if(badge){ badge.textContent=count; badge.classList.toggle('show',count>0); }
  if(currentPage==='wishlist') renderWishlistPage();
}

function renderWishlistPage(){
  var grid=document.getElementById('wishlistGrid');
  var empty=document.getElementById('wishlistEmpty');
  if(!grid||!empty)return;
  if(wishlist.length===0){
    grid.innerHTML=''; grid.style.display='none'; empty.style.display='flex';
  } else {
    empty.style.display='none'; grid.style.display='grid';
    var all=TSHIRTS.concat(TROUSERS,FOOTWEAR,DROPS);
    var items=all.filter(function(p){return wishlist.indexOf(p.id)>-1;});
    grid.innerHTML=items.map(renderPCard).join('');
  }
}

// Search
var ALL_PRODUCTS=null;
function getAllProducts(){
  if(!ALL_PRODUCTS) ALL_PRODUCTS=TSHIRTS.concat(TROUSERS,FOOTWEAR);
  return ALL_PRODUCTS;
}

function openSearch(){
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(function(){document.getElementById('searchInput').focus();},200);
}
function closeSearch(){
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('searchInput').value='';
  document.getElementById('searchResults').innerHTML='';
  document.getElementById('searchEmpty').style.display='none';
}

function doSearch(q){
  var termEl=document.getElementById('searchTerm');
  var resultsEl=document.getElementById('searchResults');
  var emptyEl=document.getElementById('searchEmpty');
  if(!q||q.length<1){resultsEl.innerHTML='';emptyEl.style.display='none';return;}
  var ql=q.toLowerCase();
  var hits=getAllProducts().filter(function(p){
    return p.name.toLowerCase().indexOf(ql)>-1||p.cat.toLowerCase().indexOf(ql)>-1||p.price.indexOf(ql)>-1;
  });
  if(hits.length===0){
    resultsEl.innerHTML='';
    if(termEl)termEl.textContent=q;
    emptyEl.style.display='block';
  } else {
    emptyEl.style.display='none';
    resultsEl.innerHTML=hits.map(renderPCard).join('');
    gsap.from(resultsEl.querySelectorAll('.pcard'),{y:20,opacity:0,duration:.4,stagger:.04,ease:'power3.out'});
  }
}

// Quick View
function openQuickView(pid){
  var all=TSHIRTS.concat(TROUSERS,FOOTWEAR,DROPS);
  var p=null;
  for(var i=0;i<all.length;i++){if(all[i].id===pid){p=all[i];break;}}
  if(!p)return;
  qvCurrentPid=pid;
  qvSelectedSize=null;

  document.getElementById('qvImg').src=p.img;
  document.getElementById('qvTag').textContent=p.cat;
  document.getElementById('qvName').textContent=p.name;
  document.getElementById('qvPrice').textContent=p.price;
  document.getElementById('qvDesc').textContent=getDesc(pid);
  document.getElementById('sizeErr').classList.remove('show');

  var meta=getMeta(pid);
  document.getElementById('qvMaterial').textContent=meta.material;
  document.getElementById('qvFit').textContent=meta.fit;
  document.getElementById('qvOrigin').textContent=meta.origin;
  document.getElementById('qvSku').textContent='VD-'+pid.toUpperCase()+'-SS26';

  // Sizes 
  var sizesHtml='';
  meta.sizes.forEach(function(s,i){
    var oos=(i===1||i===4);
    sizesHtml+='<button class="size-btn'+(oos?' oos':'')+(s===qvSelectedSize?' sel':'')+'"'
      +' data-size="'+s+'"'+(oos?' disabled':'')+'>'+s+'</button>';
  });
  document.getElementById('qvSizes').innerHTML=sizesHtml;

  // Wishlist state
  var isWished=wishlist.indexOf(pid)>-1;
  var wishBtn=document.getElementById('qvAddWish');
  wishBtn.classList.toggle('wished',isWished);
  wishBtn.querySelector('path').setAttribute('fill',isWished?'currentColor':'none');

  document.getElementById('qv-overlay').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeQuickView(){
  document.getElementById('qv-overlay').classList.remove('open');
  document.body.style.overflow='';
  qvCurrentPid=null; qvSelectedSize=null;
}

// Filter
function addFilterBar(containerId, products){
  var container=document.getElementById(containerId);
  if(!container)return;
  var cats=['All'].concat(products.reduce(function(acc,p){
    if(acc.indexOf(p.cat)===-1)acc.push(p.cat);return acc;
  },[]));
  var bar=document.createElement('div');
  bar.className='filter-bar';
  bar.id='fb-'+containerId;
  var countEl=document.createElement('span');
  countEl.className='filter-count';
  countEl.textContent=products.length+' items';
  bar.innerHTML=cats.map(function(c){
    return '<button class="filter-btn'+(c==='All'?' on':'')+'" data-cat="'+c+'">'+c+'</button>';
  }).join('');
  bar.appendChild(countEl);
  container.parentNode.insertBefore(bar, container);

  bar.addEventListener('click',function(e){
    var btn=e.target.closest('.filter-btn');
    if(!btn)return;
    var cat=btn.dataset.cat;
    bar.querySelectorAll('.filter-btn').forEach(function(b){b.classList.remove('on');});
    btn.classList.add('on');
    var filtered=cat==='All'?products:products.filter(function(p){return p.cat===cat;});
    container.innerHTML=filtered.map(renderPCard).join('');
    countEl.textContent=filtered.length+' items';
    gsap.from(container.querySelectorAll('.pcard'),{y:24,opacity:0,duration:.45,stagger:.04,ease:'power3.out'});
  });
}

// Checkout
function openCheckout(){
  closeBag();
  // summary
  var items=document.getElementById('checkoutItems');
  if(items){
    items.innerHTML=bag.map(function(b){
      return '<div class="order-line">'
        +'<img src="'+b.product.img+'" alt="'+b.product.name+'"/>'
        +'<div class="order-line-info">'
        +'<div class="order-line-name">'+b.product.name+'</div>'
        +'<div class="order-line-meta">'+b.product.cat+' · Qty '+b.qty+'</div>'
        +'</div>'
        +'<div class="order-line-price">'+fmtINR(b.product.raw*b.qty)+'</div>'
        +'</div>';
    }).join('');
  }
  var sub=bag.reduce(function(s,b){return s+b.product.raw*b.qty;},0);
  var tax=Math.round(sub*0.18);
  var shipping=sub>=50000?0:299;
  var total=sub+tax+shipping;
  var setSafe=function(id,v){var el=document.getElementById(id);if(el)el.textContent=v;};
  setSafe('coSubtotal',fmtINR(sub));
  setSafe('coShipping',shipping===0?'FREE':fmtINR(shipping));
  setSafe('coTax',fmtINR(tax));
  setSafe('coTotal',fmtINR(total));
  // logged in user
  var emailIn=document.getElementById('coEmail');
  if(emailIn&&currentUser) emailIn.value=currentUser.email;
  navigateTo('checkout');
}

function placeOrder(){
  //  validation
  var required=['coEmail','coFirst','coLast','coAddr1','coCity','coPin','coState'];
  var ok=true;
  required.forEach(function(id){
    var el=document.getElementById(id);
    if(el&&!el.value.trim()){el.style.borderColor='var(--red)';ok=false;}
    else if(el){el.style.borderColor='';}
  });
  if(!ok){showToast('Please fill all required fields.');return;}
  if(bag.length===0){showToast('Your bag is empty!');return;}
  var orderId='VD-'+Date.now().toString(36).toUpperCase();
  bag=[];
  updateBagUI();
  var oidEl=document.getElementById('successOrderId');
  if(oidEl)oidEl.textContent='Order #'+orderId;
  var succ=document.getElementById('order-success');
  succ.classList.add('open');
  gsap.from('.success-icon',{scale:.2,opacity:0,duration:.7,ease:'elastic.out(1,.5)',delay:.1});
  gsap.from('.success-title',{y:30,opacity:0,duration:.6,delay:.3});
  gsap.from(['.success-order','.success-sub','.success-back'],{y:20,opacity:0,duration:.5,stagger:.1,delay:.5});
}

function closeOrderSuccess(){
  document.getElementById('order-success').classList.remove('open');
  navigateTo('home');
}

// Toast
var toastTimer=null;
function showToast(msg){
  var t=document.getElementById('toast');
  t.innerHTML=msg;
  t.classList.add('show');
  if(toastTimer)clearTimeout(toastTimer);
  toastTimer=setTimeout(function(){t.classList.remove('show');},2800);
}

// Auth
var USERS={};  

function openAuth(tab){
  document.getElementById('auth-overlay').classList.add('open');
  switchTab(tab||'login');
}
function closeAuth(){
  document.getElementById('auth-overlay').classList.remove('open');
}
function switchTab(tab){
  var isLogin=(tab==='login');
  document.getElementById('tabLogin').classList.toggle('act',isLogin);
  document.getElementById('tabSignup').classList.toggle('act',!isLogin);
  document.getElementById('loginBody').style.display=isLogin?'block':'none';
  document.getElementById('signupBody').style.display=isLogin?'none':'block';
  document.getElementById('loginErr').classList.remove('show');
  document.getElementById('signupErr').classList.remove('show');
}

function doLogin(){
  var email=document.getElementById('loginEmail').value.trim().toLowerCase();
  var pass=document.getElementById('loginPass').value;
  var errEl=document.getElementById('loginErr');
  if(!email||!pass){errEl.textContent='Please fill all fields.';errEl.classList.add('show');return;}
  var user=USERS[email];
  if(!user||user.pass!==pass){errEl.textContent='Incorrect email or password.';errEl.classList.add('show');return;}
  currentUser={name:user.name,email:email};
  closeAuth();
  renderNavUser();
  showToast('Welcome back, '+user.name.split(' ')[0]+' 👋');
}

function doSignup(){
  var first=document.getElementById('signupFirst').value.trim();
  var last=document.getElementById('signupLast').value.trim();
  var email=document.getElementById('signupEmail').value.trim().toLowerCase();
  var pass=document.getElementById('signupPass').value;
  var errEl=document.getElementById('signupErr');
  if(!first||!last||!email||!pass){errEl.textContent='Please fill all fields.';errEl.classList.add('show');return;}
  if(pass.length<6){errEl.textContent='Password must be at least 6 characters.';errEl.classList.add('show');return;}
  if(USERS[email]){errEl.textContent='An account with this email already exists.';errEl.classList.add('show');return;}
  var name=first+' '+last;
  USERS[email]={name:name,pass:pass};
  currentUser={name:name,email:email};
  closeAuth();
  renderNavUser();
  showToast('Welcome to VÖID, '+first+'!');
}

function socialLogin(provider){
  var name=provider==='Google'?'Google User':'Apple User';
  var email=provider.toLowerCase()+'@void.in';
  USERS[email]={name:name,pass:'social'};
  currentUser={name:name,email:email};
  closeAuth();
  renderNavUser();
  showToast('Signed in with '+provider);
}

function doLogout(){
  currentUser=null;
  renderNavUser();
  showToast('Signed out. See you soon.');
}

function renderNavUser(){
  var area=document.getElementById('navUserArea');
  var mRow=document.getElementById('mobileAuthRow');
  if(currentUser){
    area.innerHTML='<div class="user-menu-wrap">'
      +'<button class="user-menu-btn" onclick="document.querySelector(\'.user-dropdown\').classList.toggle(\'open\')">'
      +'<div class="user-avatar">'+initials(currentUser.name)+'</div>'
      +'<span class="user-name">'+currentUser.name.split(' ')[0]+'</span>'
      +'</button>'
      +'<div class="user-dropdown">'
      +'<button class="dropdown-item">My Orders</button>'
      +'<button class="dropdown-item">Wishlist</button>'
      +'<button class="dropdown-item">Account Settings</button>'
      +'<button class="dropdown-item danger" onclick="doLogout()">Sign Out</button>'
      +'</div></div>';
    mRow.innerHTML='<button class="m-auth-btn" onclick="doLogout();closeMMenu()">Sign Out</button>';
  } else {
    area.innerHTML='<div class="nav-user-area">'
      +'<button class="btn-auth" onclick="openAuth(\'login\')">Login</button>'
      +'<button class="btn-auth" style="background:var(--ink);color:var(--bg);border-color:var(--ink)" onclick="openAuth(\'signup\')">Sign Up</button>'
      +'</div>';
    mRow.innerHTML='<button class="m-auth-btn" onclick="openAuth(\'login\');closeMMenu()">Login</button>'
      +'<button class="m-auth-btn" onclick="openAuth(\'signup\');closeMMenu()">Sign Up</button>';
  }
}


function initLoco(){}
function destroyLoco(){}

window.addEventListener('scroll', function(){
  document.getElementById('navbar').classList.toggle('solid', window.scrollY > 55);
}, {passive:true});

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({scroller: window});

function initScrollAnims(){
  // section-titles
  document.querySelectorAll('.sec-title').forEach(function(el){
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: function(){
        gsap.from(el, {x:-20, opacity:0, duration:.8, ease:'power3.out'});
      }
    });
  });
  // product + collection cards
  document.querySelectorAll('.pcard, .coll-card').forEach(function(el, i){
    ScrollTrigger.create({
      trigger: el,
      start: 'top 92%',
      once: true,
      onEnter: function(){
        gsap.from(el, {y:36, opacity:0, duration:.55, delay:(i%4)*0.06, ease:'power3.out'});
      }
    });
  });
  // feat items
  document.querySelectorAll('.feat-item').forEach(function(el, i){
    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: function(){
        gsap.from(el, {y:24, opacity:0, duration:.55, delay:i*0.08, ease:'power3.out'});
      }
    });
  });
}

// Router
var pageMap={
  home:'page-home',collections:'page-collections',
  'coll-detail':'page-coll-detail',
  tshirts:'page-tshirts',trousers:'page-trousers',footwear:'page-footwear',drops:'page-drops',
  wishlist:'page-wishlist',checkout:'page-checkout'
};

function navigateTo(target,collId){
  if(target===currentPage&&target!=='coll-detail')return;
  var fromId=pageMap[currentPage];
  var toId=pageMap[target];
  if(!toId)return;

  document.querySelectorAll('.nav-links a').forEach(function(a){
    a.classList.toggle('act',a.dataset.nav===target);
  });

  if(target==='coll-detail'&&collId){
    var coll=null;
    for(var i=0;i<COLLS.length;i++){if(COLLS[i].id===collId){coll=COLLS[i];break;}}
    if(coll){
      document.getElementById('cdImg').src=coll.img;
      document.getElementById('cdImg').alt=coll.name;
      document.getElementById('cdTag').textContent=coll.tag;
      document.getElementById('cdTitle').textContent=coll.name;
      document.getElementById('cdMeta').textContent=coll.count+' — '+coll.desc;
      document.getElementById('cdNum').textContent=coll.num;
      document.getElementById('cdEye').textContent='All pieces in this collection';
      document.getElementById('cdSub').textContent=coll.name;
      document.getElementById('cdProducts').innerHTML=coll.products.map(renderPCard).join('');
    }
  }

  if(target==='wishlist'){
    setTimeout(function(){ renderWishlistPage(); }, 120);
  }

  destroyLoco(fromId); 
  var fromPage=document.getElementById(fromId);
  var toPage=document.getElementById(toId);

  gsap.to(fromPage,{opacity:0,y:-16,duration:.28,ease:'power2.in',onComplete:function(){
    fromPage.classList.remove('active');
    fromPage.style.cssText='';
    toPage.classList.add('active');
    window.scrollTo(0,0);
    gsap.fromTo(toPage,{opacity:0,y:20},{opacity:1,y:0,duration:.4,ease:'power2.out'});
    currentPage=target;
    initLoco(toId); 
    ScrollTrigger.refresh();
    setTimeout(function(){animPage(toId);},80);
  }});
}

function animPage(pageId){
  var page=document.getElementById(pageId);
  if(!page)return;
  ScrollTrigger.getAll().forEach(function(t){
    if(t.vars && t.vars.trigger && page.contains(t.vars.trigger)) t.kill();
  });
  var cards=Array.from(page.querySelectorAll('.pcard,.coll-card'));
  if(cards.length){gsap.from(cards,{y:36,opacity:0,duration:.55,stagger:.04,ease:'power3.out',delay:.1});}
  var titles=Array.from(page.querySelectorAll('.sec-title'));
  titles.forEach(function(t){gsap.from(t,{x:-16,opacity:0,duration:.7,ease:'power3.out',delay:.05});});
  setTimeout(function(){
    page.querySelectorAll('.feat-item').forEach(function(el,i){
      ScrollTrigger.create({
        trigger:el, start:'top 90%', once:true,
        onEnter:function(){gsap.from(el,{y:22,opacity:0,duration:.5,delay:i*.07,ease:'power3.out'});}
      });
    });
    ScrollTrigger.refresh();
  },200);
}

var menuOpen=false;
var hamburger=document.getElementById('hamburger');
var mobileMenu=document.getElementById('mobile-menu');
function closeMMenu(){
  menuOpen=false;
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow='';
}
hamburger.addEventListener('click',function(){
  menuOpen=!menuOpen;
  hamburger.classList.toggle('open',menuOpen);
  mobileMenu.classList.toggle('open',menuOpen);
  document.body.style.overflow=menuOpen?'hidden':'';
});


document.addEventListener('click',function(e){
  var navEl=e.target.closest('[data-nav]');
  if(navEl&&!navEl.closest('#auth-modal')&&!navEl.closest('#qv-modal')){
    e.preventDefault();
    var tgt=navEl.dataset.nav;
    if(navEl.hasAttribute('data-close'))closeMMenu();
    navigateTo(tgt);
    return;
  }
  // collection card
  var cc=e.target.closest('.coll-card[data-coll]');
  if(cc){e.preventDefault();navigateTo('coll-detail',cc.dataset.coll);return;}

  // wishlist toggle
  var wishBtn=e.target.closest('.pcard-wish[data-wid]');
  if(wishBtn){e.stopPropagation();toggleWishlist(wishBtn.dataset.wid);return;}

  var qvArea=e.target.closest('[data-qv]');
  if(qvArea&&!e.target.closest('.pcard-add')&&!e.target.closest('.pcard-wish')){
    openQuickView(qvArea.dataset.qv); return;
  }

  // add to bag button
  var addBtn=e.target.closest('.pcard-add[data-pid]');
  if(addBtn){
    e.stopPropagation();
    addBtn.classList.add('added');
    setTimeout(function(){addBtn.classList.remove('added');},400);
    addToBag(addBtn.dataset.pid);
    return;
  }

  // quick view size selection
  var szBtn=e.target.closest('.size-btn:not(.oos)');
  if(szBtn&&document.getElementById('qv-overlay').classList.contains('open')){
    qvSelectedSize=szBtn.dataset.size;
    document.querySelectorAll('.size-btn').forEach(function(b){b.classList.remove('sel');});
    szBtn.classList.add('sel');
    document.getElementById('sizeErr').classList.remove('show');
    return;
  }

  // quick view add to bag
  if(e.target.id==='qvAddBag'||e.target.closest('#qvAddBag')){
    if(!qvSelectedSize){document.getElementById('sizeErr').classList.add('show');return;}
    if(qvCurrentPid) addToBag(qvCurrentPid);
    closeQuickView();
    return;
  }

  // quick view wishlist
  if(e.target.id==='qvAddWish'||e.target.closest('#qvAddWish')){
    if(qvCurrentPid) toggleWishlist(qvCurrentPid);
    var wb=document.getElementById('qvAddWish');
    var isW=wishlist.indexOf(qvCurrentPid)>-1;
    wb.classList.toggle('wished',isW);
    wb.querySelector('path').setAttribute('fill',isW?'currentColor':'none');
    return;
  }

  // close quick view
  if(e.target.id==='qv-overlay'||e.target.closest('#qvClose')){closeQuickView();return;}

  // search open
  if(e.target.closest('#navSearchBtn')){openSearch();return;}
  // search close
  if(e.target.closest('#searchCloseBtn')){closeSearch();return;}
  // search clear
  if(e.target.id==='searchClear'){
    document.getElementById('searchInput').value='';
    document.getElementById('searchResults').innerHTML='';
    document.getElementById('searchEmpty').style.display='none';
    return;
  }

  // bag open
  if(e.target.closest('#navBagBtn')||e.target.closest('#mBagBtn')){openBag();closeMMenu();return;}
  // bag close
  if(e.target.closest('#bagClose')||e.target.id==='bag-overlay'){closeBag();return;}
  if(e.target.closest('#bagContinue')){closeBag();return;}
  // checkout from bag
  if(e.target.closest('.btn-checkout')){openCheckout();return;}
  // back to bag from checkout
  if(e.target.id==='backToBagBtn'){navigateTo('home');openBag();return;}
  // place order
  if(e.target.id==='placeOrderBtn'){placeOrder();return;}

  // qty buttons
  var qBtn=e.target.closest('.qty-btn[data-qid]');
  if(qBtn){changeQty(qBtn.dataset.qid,parseInt(qBtn.dataset.delta));return;}
  // delete from bag
  var delBtn=e.target.closest('.bag-item-del[data-del]');
  if(delBtn){removeFromBag(delBtn.dataset.del);return;}

  // auth close
  if(e.target.id==='auth-overlay'){closeAuth();return;}
  if(e.target.closest('#authCloseX')){closeAuth();return;}
  // close user dropdown on outside click
  var udrop=document.querySelector('.user-dropdown');
  if(udrop&&udrop.classList.contains('open')&&!e.target.closest('.user-menu-wrap')){
    udrop.classList.remove('open');
  }
});

// Init
populateAll();
updateBagUI();
updateWishUI();
renderNavUser();

// Filter bars on category pages (added after DOM is ready)
setTimeout(function(){
  addFilterBar('fullTshirts',  TSHIRTS);
  addFilterBar('fullTrousers', TROUSERS);
  addFilterBar('fullFootwear', FOOTWEAR);
  addFilterBar('fullDrops',    DROPS);
},50);

// Search input live listener
var sinput=document.getElementById('searchInput');
if(sinput){
  sinput.addEventListener('input',function(){doSearch(this.value.trim());});
  sinput.addEventListener('keydown',function(e){if(e.key==='Escape')closeSearch();});
}

// Payment
document.querySelectorAll('input[name="pay"]').forEach(function(r){
  r.addEventListener('change',function(){
    document.querySelectorAll('#paymentMethods label').forEach(function(l){
      l.style.borderColor='var(--border)';
    });
    if(this.checked) this.closest('label').style.borderColor='var(--ink)';
  });
});

// Checkout bag btn
var btb=document.getElementById('backToBagBtn');
if(btb)btb.addEventListener('click',function(){navigateTo('home');setTimeout(openBag,350);});

// Hero 
var hBadge=document.querySelector('.hero-badge');
var hH1=document.querySelector('.hero-h1');
var hDesc=document.querySelector('.hero-desc');
var hCtas=document.querySelector('.hero-ctas');
var hImg=document.getElementById('heroImg');
if(hImg){hImg.addEventListener('load',function(){this.classList.add('rdy');});if(hImg.complete)hImg.classList.add('rdy');}

var htl=gsap.timeline({defaults:{ease:'power4.out'}});
if(hBadge)htl.from(hBadge,{y:24,opacity:0,duration:.75,delay:.25});
if(hH1)htl.from(hH1,{y:68,opacity:0,duration:1.05,ease:'expo.out'},'-=.3');
if(hDesc)htl.from(hDesc,{y:18,opacity:0,duration:.65},'-=.35');
if(hCtas)htl.from(hCtas,{y:14,opacity:0,duration:.6},'-=.3');
if(hImg)htl.from(hImg,{scale:1.08,duration:1.4,ease:'expo.out'},0);

setTimeout(function(){
  initScrollAnims();
  animPage('page-home');
}, 300);

document.querySelectorAll('.nav-links a').forEach(function(a){
  a.classList.toggle('act',a.dataset.nav==='home');
});
