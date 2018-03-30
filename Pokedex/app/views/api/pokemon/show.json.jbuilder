json.pokemon do
  # json.merge! @poke
  json.set! @poke.id do
    json.extract! @poke, :id, :name, :attack, :defense, :poke_type, :moves
    json.image_url asset_path(@poke.image_url)
    json.items_ids do
      json.array!(@poke.items.ids)
    end
  end

end

json.items do
  @poke.items.each do |item|
    json.set! item.id do
      json.merge! item
    end
  end
end
