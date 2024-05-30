// フォーム制御
$(function () {
  $('#contactBtn').on('click', function() {
    $('#btn-text').text('送信されました！');

    console.log('名前:' + $('[name="username"]').val());
  });

  $('[name="username"]').on("input", function() {
    let input = $(this).val();
    if (input) {
      $('#contactBtn').prop('disabled', false);
    } else {
      $('#contactBtn').prop('disabled', true);
    }
  });
});


