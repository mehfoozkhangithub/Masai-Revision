var $layer = document.querySelector(".layer");
var $layerArr = [].slice.call(document.querySelectorAll(".layer-item"));
var $closeBtnArr = [].slice.call(
	document.querySelectorAll(".layer-item__close-btn")
);

setTimeout(function () {
	$layer.classList.remove("layer--inactive");
}, 200);

$layerArr.forEach(function ($el) {
	$el.addEventListener("click", function () {
		if (this.classList.contains("layer-item--active")) return;
		$layer.classList.add("layer--active");
		this.classList.add("layer-item--active");
	});
});

$closeBtnArr.forEach(function ($btn) {
	$btn.addEventListener("click", function (e) {
		e.stopPropagation();
		$layer.classList.remove("layer--active");
		document
			.querySelector(".layer-item.layer-item--active")
			.classList.remove("layer-item--active");
	});
});
