const buenasTardes = [
  'https://i.pinimg.com/236x/e6/e0/fc/e6e0fc5bac5e0ca05d9977946152a555.jpg',
  'https://i.pinimg.com/236x/5d/7e/a8/5d7ea8cfcf1ccd83e4d9863443d2c013.jpg',
  'https://i.pinimg.com/236x/b2/c2/ca/b2c2ca6819f6f4093fa17aeb4b087eec.jpg',
  'https://i.pinimg.com/236x/d3/3c/8e/d33c8ee2c6056f914cde97179b678a4f.jpg',
  'https://i.pinimg.com/236x/62/ed/7a/62ed7a7a758273e6b18faec5c6b941ce.jpg',
  'https://i.pinimg.com/236x/ae/01/cf/ae01cfa0e3e468d183b87e290a21061f.jpg',
  'https://i.pinimg.com/236x/d9/b7/ec/d9b7ec104a773e9b3655bf7bc4febe53.jpg',
  'https://i.pinimg.com/236x/4e/74/15/4e7415b192446dc11557474b9c8b30c7.jpg',
  'https://i.pinimg.com/236x/15/64/1d/15641dfb6a3a5aadaac9a2b0f02af404.jpg',
  'https://i.pinimg.com/236x/53/11/3d/53113dcb9aab908bb75e2f23dca332c2.jpg',
  'https://i.pinimg.com/236x/df/e2/25/dfe2255038480d9156befcfda00b3166.jpg',
  'https://i.pinimg.com/236x/00/a4/2c/00a42c9d2c3c3dafa40c05b284570c6a.jpg',
  'https://i.pinimg.com/236x/40/ee/aa/40eeaa3ea6d650621f4e8be1367d51c7.jpg',
  'https://i.pinimg.com/236x/a5/df/15/a5df15a12836155d341cb6a936343639.jpg',
  'https://i.pinimg.com/236x/31/94/7a/31947a1c5b05139cbad72c981f9a74ed.jpg',
  'https://i.pinimg.com/236x/74/a0/49/74a0495790b02e44e5a0f44a624c7eef.jpg',
  'https://i.pinimg.com/236x/40/21/83/40218369f7c8b4a4ad4091ccbf608eb9.jpg',
  'https://i.pinimg.com/236x/0a/81/bb/0a81bb19e444f0d043fb64c4404d1115.jpg',
  'https://i.pinimg.com/236x/d4/3a/14/d43a144c2805fc74f483fdae269a1888.jpg',
  'https://i.pinimg.com/236x/f4/7e/30/f47e3064be2c43a52b3d982881b6a20e.jpg',
  'https://i.pinimg.com/236x/16/17/97/16179715b1663d7f0ef2d6ee7c7b7cf1.jpg',
  'https://i.pinimg.com/236x/6c/39/6f/6c396ff6119ae19fccee1101d81254e4.jpg',
  'https://i.pinimg.com/236x/13/cf/c6/13cfc6995d5fcd5603fca1b7000a2e82.jpg',
  'https://i.pinimg.com/236x/cb/a7/ca/cba7cad932f0236aed8cb133ba0227c1.jpg',
  'https://i.pinimg.com/236x/c3/ad/3e/c3ad3e62efb68179e5f6ba6aca67b7aa.jpg',
  'https://i.pinimg.com/236x/05/01/01/05010199be64e5129defa32afe9f157e.jpg',
  'https://i.pinimg.com/236x/80/14/fb/8014fbb7b752e16f690faebef6c19bfc.jpg',
  'https://i.pinimg.com/236x/b4/84/dd/b484ddf5c27bd2f605ad4efcb544bf1c.jpg',
  'https://i.pinimg.com/236x/24/fe/02/24fe02772ba9ee254df7586846dbb60a.jpg',
  'https://i.pinimg.com/236x/ac/75/b5/ac75b597de66f03ddac350b7851dd036.jpg',
  'https://i.pinimg.com/236x/2b/2a/c0/2b2ac050e2a3701af6ed5eaacfaee3c6.jpg',
  'https://i.pinimg.com/236x/4e/a8/d0/4ea8d013b90243c9764a519af05c5725.jpg',
  'https://i.pinimg.com/236x/56/0d/63/560d638b0dc53c4ffbecf3182e4adea1.jpg',
  'https://i.pinimg.com/236x/d4/fb/55/d4fb55f91259f2aa0e14af7f8f1a57fd.jpg',
  'https://i.pinimg.com/236x/b2/61/ae/b261ae85adb6e75057b2b9f27be3d8ab.jpg',
  'https://i.pinimg.com/236x/c5/62/86/c562866410eb24ccbca782b53ea4446f.jpg',
  'https://i.pinimg.com/236x/56/d1/17/56d11790a4a178c2842c1b6f8dbeba8f.jpg',
  'https://i.pinimg.com/236x/6c/07/63/6c07631d409855fdecd937efec6b4092.jpg',
  'https://i.pinimg.com/236x/d2/8c/64/d28c6472917cc7fb2a6f05e6ef9e398e.jpg',
  'https://i.pinimg.com/236x/f4/d1/5f/f4d15ff038827a632d6037e021fbad14.jpg',
  'https://i.pinimg.com/236x/f0/e9/83/f0e98319253fe8a6ac4585cb15ed6c12.jpg',
  'https://i.pinimg.com/236x/f1/58/08/f158085aec652ac05dd7e219b4a06fc5.jpg',
  'https://i.pinimg.com/236x/89/62/fa/8962fa522d39d0efee38d16c1cb9562c.jpg',
  'https://i.pinimg.com/236x/d8/c7/7c/d8c77c248e99a1104d9bbea22c8fd431.jpg',
  'https://i.pinimg.com/236x/33/34/75/33347568e0ba4939cde9fe0d04a7dd02.jpg',
  'https://i.pinimg.com/236x/d6/a5/84/d6a584ffb459da455fc79749ce889633.jpg',
  'https://i.pinimg.com/236x/56/e2/ab/56e2ab598bd6dd446fe46e4f34806144.jpg',
  'https://i.pinimg.com/236x/65/7b/8e/657b8ec9761d431cca85db72d5ce8334.jpg',
  'https://i.pinimg.com/236x/84/a1/ec/84a1ec45c630dd5388d2a4c0a79fb5cf.jpg',
  'https://i.pinimg.com/236x/c4/75/51/c475519fb23d1031cf0b4a3da7ea7fdd.jpg',
];

module.exports = buenasTardes;
