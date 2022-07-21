const handleBlocks = (value, scope) => {
  const parent = scope || location.hash;
  const blocksContainer = $(parent + " .blocks-form .flex-wrapper");
  const blocksCount = $(parent + " .blocks-count");
  blocksContainer.empty();

  if (!value.trim()) {
    blocksCount.text("0");
    return;
  }

  value.split("\n").forEach((text, i) => {
    const newBlock = $(
      `<div class='text-block dark'>
        ${text}
        <i class='material-icons'>close</i>
      </div>`
    );

    newBlock.find("i").click(() => removeBlock(i));

    blocksContainer.append(newBlock);
  });

  blocksCount.text(value.split("\n").length);
};

const removeBlock = (index) => {
  const textarea = $(".blocks-area");
  const blocks = textarea.val().split("\n");

  blocks.splice(index, 1);
  textarea.val(blocks.join("\n"));
  handleBlocks(textarea.val());
};

$(document).ready(function () {
  handleBlocks($(".blocks-area").val());

  $(".blocks-form input.block-input").keypress(function (e) {
    if (e.which != 13) return;
    e.preventDefault();

    if (!$(this).val().trim()) return;

    const newBlock = $(this).val().trim();
    const textarea = $(this).parent().siblings(".blocks-area");
    const blocksValue = textarea.val();

    blocksValue
      ? textarea.val(blocksValue.trim() + "\n" + newBlock)
      : textarea.val(blocksValue.trim() + newBlock);

    handleBlocks(textarea.val());
    $(this).val("");
  });

  $(".blocks-form input.block-select").keyup(function (e) {
    const inputList = $(this).parent(".input-group").find(".input-list");
    const inputValue = $(this).val().trim().toLowerCase();
    const textarea = $(this).parents(".blocks-form").find(".blocks-area");
    const blocksValue = textarea.val().toLowerCase();

    if (!inputValue) {
      inputList.hide();
      return;
    }

    inputList.show();

    let count = 5;

    inputList.find("li").each(function (i) {
      const text = $(this).text().toLowerCase();

      if (
        (count > 0) &
        text.includes(inputValue) &
        !blocksValue.includes(text)
      ) {
        $(this).show();
        count--;
      } else {
        $(this).hide();
      }
    });
  });


  $(".blocks-form ul.input-list li").click(function() {
    const textarea = $(this).parents(".blocks-form").find(".blocks-area");
    const inputSelect = $(this).parents(".blocks-form").find(".block-select");
    const inputList = $(this).parent();
    const newBlock = $(this).text();

    const blocksValue = textarea.val();

    blocksValue
      ? textarea.val(blocksValue.trim() + "\n" + newBlock)
      : textarea.val(blocksValue.trim() + newBlock);

    handleBlocks(textarea.val());
    inputList.hide();
    inputSelect.val("");
    inputSelect.focus();
  });
});
