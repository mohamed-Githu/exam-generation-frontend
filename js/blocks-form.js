const handleBlocks = (value) => {
  const blocksContainer = $(".blocks-form .flex-wrapper");
  const blocksCount = $(".blocks-count");
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
}

$(document).ready(function () {
  handleBlocks($(".blocks-area").val());

  $(".blocks-form input.block-input").keypress(function (e) {
    if (e.which != 13) return;
    e.preventDefault();

    if (!$(this).val().trim()) return;

    const newBlock = $(this).val().trim();
    const textarea = $(".blocks-area");
    const blocksValue = textarea.val();

    blocksValue
      ? textarea.val(blocksValue.trim() + "\n" + newBlock)
      : textarea.val(blocksValue.trim() + newBlock);

    handleBlocks(textarea.val());
    $(this).val("");
  });
});
